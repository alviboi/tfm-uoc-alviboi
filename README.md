
# Nom del projecte
SISTEMA DE GESTIÓ MATRICULACIÓ PER A UNA ESCOLA PÚBLICA D’ADULTS
## Informació del projecte

El projecte a realitzar consistix en crear un sistema de gestió de matrícula per a Escoles Públiques d'adults a la Comunitat Valenciana, concretament la EPA Pasqual i Tirado e Castelló de Plana però que siga adaptable a qualsevol altra. En aquestos centres no es disposa de personal administratiu, per tant, són els mateixos professors els qui s'han de fer càrrec de la matrícula i administració de tot el procés inscripció de l'alumnat.
El projecte te dues parts diferenciades.
Per una banda una pàgina on els alumnes puguin introduir les dades de la seua matrícula i fer-se una fota i un altra pàgina on aquesta informació pugui ser validada per un professor a un altre ordinador després d'entregar la documentació requerida.
Per altra banda, el mateix sistema ha de ser capaç de gestionar la informació introduïda en la manera que la EPA (Escola pública d'adults) requerix, facilitant així el post-procés de matrícula i fer accessibles totes les dades. La informació proporcionada consistirà principalment en:
Els llistats dels alumnes matriculats.
Els llistats de les persones acceptades.
Imprimir documentació varia com les orles o els llistats.
Permetre organitzar per grups els matriculats a Ges (Secundària per a adults).
Exportar dades a arxiu de configuració de moodle.
I gestions varies en la base de dades com crear nous cursos, borrar-los, ofertar-los, etc...

## Instalació de projecte

###Configura Accés a la base de dades


Per a que els sistema puga accedir a la base de dades has d'editar l'arxiu: /tfm2/php/classes/dades.php
i afegir les dades necessàries, principalment $DBUser, nom de l'usuari de la base de dades i $DBPassword,
contrasenya de l'usuari.
```
<?php
  $DBserver="localhost";
  $DBname="pasqitira";
  $DBuser="";
  $DBpassword="";
?>
```
###Configura apache2

El sistema deuria de funcionar ja sense problemes, està pensat per a que funcione dins d'una xarxa local. Encara que,
de totes maneres, per a evitar que es puga accedir als arxius desde altres ordinadors, cal desactivar la opció indexes 
de apache2. Es pot copiar directament l'arxiu de /conf/apache2 i afegir les següents opcions:
```
<Directory /tfm2>
	Options FollowSymLinks
	AllowOverride None
	Require all denied
</Directory>

<Directory /fotos_alumnes_2>
	Options FollowSymLinks
	AllowOverride None
	Require all denied
</Directory>
```
##Navegació pel sistema

Una vegada instal·lat el sistema per poder navegar per ell hi ha que accedir a través de la pàgina http://localhost/tfm2
Si s'accedix des d'un ordinador extern cal substituir localhost per la ip o nom del host si està configurat.

En la primera pàgina podem accedir a la pàgina principal que utilitzaran els alumnes per matricular-se.
Es pot accedir també a la documentació del projecte.
Podem anar a la pestanya de Adminsitració i podem entrar amb el següent ususari i contrasenya:
```
Usuari: admin
Contrasenya: admin
```
Dins de l'apartat d'administració tenim una barra de navegación on tenim les següents opcions:

* Matriculació: pàgina principal per a recuperar les dades d'un alumnes
* Llistats: Per buscar els alumnes matriculats a un curs i un any.
* Organitza Cursos
	- Curs GES2.1: Organitza els cursos de GES2.1, assignant-los a grups.
	- Curs GES2.2: Organitza els cursos de GES2.2, assignant-los a grups.
	- Organitza per llistat: 1: Organitza els cursos de GES2.1, assignant-los a grups, però amb un llistat.
	- SORTEIG: Realitza l'assignació d'alumnes una vegada realitzar el sorteig. El sorteig escollix una lletra que seran els qui accediran.
* Exporta arxius: Exporta les dades de l'alumnat a diferents tipus d'arxius, pdf, txt, full de càlcul, moodle i orla de fotos.
* Estadístiques: Imatges de 3 estadístiques bàsiques de la matrícula.
* Configuració
	- Configuració general: per afegir cursos, llevar-los, nous usuaris.
	- Importa Curs anterior: Importa les dades d'alumnes de cursos anteriors i els matricula en un nou curs. 
	- Anys: Per a començar un nou procés de matrícula un altre any.


## Contribuix
1. Fork it!
2. Crea una feature branch: `git checkout -b my-new-feature`
3. Commit canvis: `git commit -am 'Add some feature'`
4. Push al branch: `git push origin my-new-feature`
5. Submit pull request :D

## Crèdits
EL projecte està realitzat per: alviboi@gmail.com
Projecte de final de màster.

## Llcència
Aquesta obra està subjecte a la llicència de Reconeixement-NoComercial-CompartirIgual 4.0 Internacional de Creative Commons. Si voleu veure una còpia d'aquesta llicència accediu a http://creativecommons.org/licenses/by-nc-sa/4.0/ o envieu una carta sol·licitant-la a Creative Commons,  PO Box 1866, Mountain View, CA 94042, USA.

Les llibreries tenen les seues pròpies Llicències que trobareu a la carpeta de la llibreria LICENSE.
