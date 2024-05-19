import whisper
import os
import pandas as pd
import pymorphy2 as pm2
from config import keywords, DATA_PATH, CSV_FILE_PATH

morph = pm2.MorphAnalyzer(lang="ru")

def get_file_names(csv_file, table_header, data_dir):
    dir_files = os.listdir(data_dir)
    file_ids = pd.read_csv(csv_file)[table_header].tolist()
    file_names = [file_name for file_name in dir_files
                  if any(str(file_id) in file_name for file_id in file_ids)]
    return file_names

def transcribe_file(model, data_dir, file_name):
    result = model.transcribe(data_dir + file_name)
    text = result["text"]
    return text.lower()

def get_word_lexemes(word):
    return [x.word for x in morph.parse(word)[0].lexeme]

def process_categories(text):
    categories = {category for category, words in keywords.items()
                  for word in words
                  for word_lexeme in get_word_lexemes(word)
                  if word_lexeme in text}
    return categories

def main():
    model = whisper.load_model("medium")
    file_names = get_file_names(CSV_FILE_PATH, "Advertisement ID", DATA_PATH)
    for file_name in file_names:
        text = transcribe_file(model, DATA_PATH, file_name)
        categories = process_categories(text)
        print(file_name, categories)

if __name__ == "__main__":
    main()
