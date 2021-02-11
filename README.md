# SEPI
## Cum adaugi membri
* Intri in srsi_back/static/membri/
* Creezi un folder nou cu numele membrului
* Adaugi in folder un fisier numit meta.json ce contine campurile "institution", "name", "role". Daca campul name nu e identic cu numele folder-ului, pagina de profil a membrului va aparea ca si goala 
* Adaugi in folder un fisier numit content.jsx ce contine cv-ul membrului 
* Adaugi doua fotografii cu terminatiile .png, .gif, .jpg sau .jpeg, mainpic.extensie si avatar.extensie. Avatar trebuie sa fie o poza patrata ca membrul sa nu apara turtit pe lista

## Cum faci schimbari la front
* Schimbi ce e de schimbat in srsi_front, apoi _din srsi_front_  rulezi comanda yarn build

## Erori ce pot aparea la adaugarea membrilor
* Daca fisierele din folderul unui membru nu sunt in format UTF-8 rezulta o eroare 505
* Daca name-ul din JSON nu e identic cu numele folder-ului, atunci pagina de profil a membrului va fi goala

