<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Task Completed</title>
    <style>
        body, html {
            height: 100%;
            margin: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #121212;
            background-image: url('https://www.toptal.com/designers/subtlepatterns/patterns/dark_geometric.png');
            color: #fff;
            font-family: 'Arial', sans-serif;
        }
        #popup {
            display: none;
            width: 350px;
            padding: 20px;
            background-color: rgba(50, 50, 50, 0.9);
            border: 2px solid #FF4500;
            text-align: center;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
            border-radius: 10px;
        }
        #popup p {
            font-size: 20px;
            margin-bottom: 20px;
        }
        #close-btn {
            padding: 10px 25px;
            background-color: #FF4500;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
            transition: background-color 0.3s ease;
        }
        #close-btn:hover {
            background-color: #FF6347;
        }
    </style>
</head>
<body>

<div id="popup">
    <p>Я зміг розв'язати цю задачу, ура!</p>
    <button id="close-btn">Закрити</button>
</div>

<script>
    window.onload = function() {
        var popup = document.getElementById('popup');
        popup.style.display = 'block';

        var closeBtn = document.getElementById('close-btn');
        closeBtn.onclick = function() {
            popup.style.display = 'none';
        }
    }
</script>

</body>
</html>
