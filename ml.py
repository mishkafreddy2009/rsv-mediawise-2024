import whisper
import os
import csv
import json
from utils.keywords import keywords
import concurrent.futures

DATASET_PATH = "./dataset/audio/"

def get_video_names_from_csv(csv_file):
    ids = []
    with open(csv_file, 'r') as f:
        reader = csv.reader(f)
        for row in reader:
            if row:
                ids.append(row[0])
    return ids

def get_file_names(path):
    return os.listdir(path)

def get_exists_files(video_names, file_names):
    return [file_name for file_name in file_names if file_name[:-4] in video_names]

def get_file_paths(path, file_names):
    return [path + file_name for file_name in file_names]

def process_file(file):
    model = whisper.load_model("base")
    result = model.transcribe(file)
    text = result["text"]
    found = False
    for word in keywords["Банки"]:
        if word in text:
            found = True
            break
    return file, found

if __name__ == "__main__":
    model = whisper.load_model("base")
    video_names = get_video_names_from_csv("./train_segments.csv")
    file_names = get_exists_files(video_names, get_file_names(DATASET_PATH))[:3]
    files = get_file_paths(DATASET_PATH, file_names)
    with concurrent.futures.ThreadPoolExecutor() as executor:
        results = [executor.submit(process_file, file) for file in files]
        for result in results:
            print(result)
