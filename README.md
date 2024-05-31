# rsv-mediawise-2024

AI soultion for "Creative filter" case from company Media Wise at hackathon "Цифровой Прорыв 2024: сезон искусственный интеллект".

## problem

create expanded segmentation of client creative by categories, subcategories and subsubcategories.

## solution

created user-friendly web-application where user can upload their own .xls file with info about videos IDs, etc., then we process these videos to get segmentation info and then user can download output .xls file that contain videos IDs segmented by categories.

## used technologies

- python
    - fastapi
    - whisper
    - pandas
    - pymorphy
- react
- docker
