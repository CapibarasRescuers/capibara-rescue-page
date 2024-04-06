import json
import os
import time
from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler

CARPETA_IMAGENES = "./src/assets/images"
ARCHIVO_JSON = './src/images.json'

class ManejadorCarpeta(FileSystemEventHandler):
    def on_created(self, event):
        if not event.is_directory and (event.src_path.endswith('.jpg') or event.src_path.endswith('.jpeg') or event.src_path.endswith('.png')):
            with open(ARCHIVO_JSON, 'r') as f:
                data = json.load(f)
            # Agrega la nueva imagen al JSON
            data['images'].append(os.path.basename(event.src_path))
            # Escribe el JSON actualizado
            with open(ARCHIVO_JSON, 'w') as f:
                json.dump(data, f, indent=4)

    def on_deleted(self, event):
        if not event.is_directory and (event.src_path.endswith('.jpg') or event.src_path.endswith('.jpeg') or event.src_path.endswith('.png')):
            with open(ARCHIVO_JSON, 'r') as f:
                data = json.load(f)
            # Elimina la imagen del JSON si existe
            filename = os.path.basename(event.src_path)
            if filename in data['images']:
                data['images'].remove(filename)
                # Escribe el JSON actualizado
                with open(ARCHIVO_JSON, 'w') as f:
                    json.dump(data, f, indent=4)

if __name__ == "__main__":
    # Crea el JSON si no existe
    if not os.path.exists(ARCHIVO_JSON):
        with open(ARCHIVO_JSON, 'w') as f:
            json.dump({'images': []}, f, indent=4)

    observer = Observer()
    observer.schedule(ManejadorCarpeta(), path=CARPETA_IMAGENES, recursive=False)
    observer.start()

    try:
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        observer.stop()
    observer.join()
