define({ "api": [
  {
    "type": "get",
    "url": "/php/index.php/ConsultaMatriculatsCurs/:curs/:any",
    "title": "Consulta tots els estudiants matriculats a un curs i un any determinat",
    "name": "busc_estudiant_cursos_any_anterior",
    "group": "Configuraci_",
    "description": "<p>Es crea un llistat amb tots els estudiants matriculats a un curs, i es genera un botó per a poder importar eixes dades</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "curs",
            "description": "<p>Curs del qual volem saber les dades.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "any",
            "description": "<p>Any del qual volem saber les dades</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "-",
            "description": "<p>Torna un Json amb totes les dades demanades, amb els cursos que estan en la base de dades en eixe moment.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Nom",
            "description": "<p>Nom del alumne</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Cognoms",
            "description": "<p>Cognoms de l'alumne</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "DNI",
            "description": "<p>DNI de l'alumne</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Telefon",
            "description": "<p>Telèfon de l'alumne</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Sexe",
            "description": "<p>Sexe de l'alumne</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "DataNaixement",
            "description": "<p>Data de Naixement de l'alumne</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "PaisNaixement",
            "description": "<p>País de Naixement de l'alumne</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Nacionalitat",
            "description": "<p>Nacionalitat de l'alumne</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "LocalitatNaixement",
            "description": "<p>Localitat de Naixement de l'alumne</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ProvinciaNaixement",
            "description": "<p>Provincia Naixement de l'alumne</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Direccio",
            "description": "<p>L'adreça de l'alumne</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "CP",
            "description": "<p>Codi Postal</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Poblacio",
            "description": "<p>On viu</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Email",
            "description": "<p>Correu electrònic</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Comentaris",
            "description": "<p>Comentaris sobre alguna specte a tenir en compte</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Optativa1",
            "description": "<p>Optativa per al grup GES, irrelevant si no està matriculat en GES</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Optativa2",
            "description": "<p>Optativa per al grup GES, irrelevant si no està matriculat en GES</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "Validada",
            "description": "<p>Si ha entregat tots els paper o no</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "CursCodi",
            "description": "<p>En quin curs està matriculat</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "Matriculat",
            "description": "<p>Si ha estat acceptat o no.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Camp",
            "description": "<p>Camp del Curs on està matriculat</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n[{\"DNI\":\"000000000\",\"0\":\"000000000\",\"Nom\":\"000000000\",\"1\":\"000000000\",\"Cognoms\":\"000000000\",\"2\":\"000000000\",\"Direccio\":\"000000000\",\"3\":\"000000000\",\"CP\":\"0\",\"4\":\"0\",\"Poblacio\":\"000000000\",\"5\":\"000000000\",\"Sexe\":\"Home\",\"6\":\"Home\",\"DataNaixement\":\"1977-04-08\",\"7\":\"1977-04-08\",\"PaisNaixement\":\"000000000\",\"8\":\"000000000\",\"Nacionalitat\":\"espanyola (E)\",\"9\":\"espanyola (E)\",\"LocalitatNaixement\":\"000000000\",\"10\":\"000000000\",\"ProvinciaNaixement\":\"000000000\",\"11\":\"000000000\",\"Email\":\"a@a.es\",\"12\":\"a@a.es\",\"Telefon\":\"0\",\"13\":\"0\",\"Comentaris\":\"\",\"14\":\"\",\"passwd_moodle\":\"uQ(b28209\",\"15\":\"uQ(b28209\"},{\"DNI\":\"33333333A\",\"0\":\"33333333A\",\"Nom\":\"Nom9\",\"1\":\"Nom9\",\"Cognoms\":\"Cagnom9\",\"2\":\"Cagnom9\",\"Direccio\":\"La meua\",\"3\":\"La meua\",\"CP\":\"46410\",\"4\":\"46410\",\"Poblacio\":\"sueca\",\"5\":\"sueca\",\"Sexe\":\"Dona\",\"6\":\"Dona\",\"DataNaixement\":\"1979-12-04\",\"7\":\"1979-12-04\",\"PaisNaixement\":\"Espanya\",\"8\":\"Espanya\",\"Nacionalitat\":\"espanyola (E)\",\"9\":\"espanyola (E)\",\"LocalitatNaixement\":\"Sueca\",\"10\":\"Sueca\",\"ProvinciaNaixement\":\"Valencia\",\"11\":\"Valencia\",\"Email\":\"alviboi@gmail.com\",\"12\":\"alviboi@gmail.com\",\"Telefon\":\"654722866\",\"13\":\"654722866\",\"Comentaris\":\"\",\"14\":\"\",\"passwd_moodle\":\"1234\",\"15\":\"1234\"},{\"DNI\":\"44444444F\",\"0\":\"44444444F\",\"Nom\":\"ALFREDO\",\"1\":\"ALFREDO\",\"Cognoms\":\"dadas\",\"2\":\"dadas\",\"Direccio\":\"dada\",\"3\":\"dada\",\"CP\":\"4532543\",\"4\":\"4532543\",\"Poblacio\":\"fsdaf\",\"5\":\"fsdaf\",\"Sexe\":\"Home\",\"6\":\"Home\",\"DataNaixement\":\"1973-04-13\",\"7\":\"1973-04-13\",\"PaisNaixement\":\"DSADA\",\"8\":\"DSADA\",\"Nacionalitat\":\"espanyola (E)\",\"9\":\"espanyola (E)\",\"LocalitatNaixement\":\"Sueca\",\"10\":\"Sueca\",\"ProvinciaNaixement\":\"alacant\",\"11\":\"alacant\",\"Email\":\"nataliues15@gmail.com\",\"12\":\"nataliues15@gmail.com\",\"Telefon\":\"654722866\",\"13\":\"654722866\",\"Comentaris\":\"\",\"14\":\"\",\"passwd_moodle\":\"1234\",\"15\":\"1234\"},{\"DNI\":\"44444444B\",\"0\":\"44444444B\",\"Nom\":\"ALFREDO\",\"1\":\"ALFREDO\",\"Cognoms\":\"dadas\",\"2\":\"dadas\",\"Direccio\":\"dada\",\"3\":\"dada\",\"CP\":\"4532543\",\"4\":\"4532543\",\"Poblacio\":\"fsdaf\",\"5\":\"fsdaf\",\"Sexe\":\"Home\",\"6\":\"Home\",\"DataNaixement\":\"1970-01-01\",\"7\":\"1970-01-01\",\"PaisNaixement\":\"DSADA\",\"8\":\"DSADA\",\"Nacionalitat\":\"espanyola (E)\",\"9\":\"espanyola (E)\",\"LocalitatNaixement\":\"Sueca\",\"10\":\"Sueca\",\"ProvinciaNaixement\":\"alacant\",\"11\":\"alacant\",\"Email\":\"nataliues15@gmail.com\",\"12\":\"nataliues15@gmail.com\",\"Telefon\":\"654722866\",\"13\":\"654722866\",\"Comentaris\":\"\",\"14\":\"\",\"passwd_moodle\":\"1234\",\"15\":\"1234\"},{\"DNI\":\"44444444K\",\"0\":\"44444444K\",\"Nom\":\"Natalia\",\"1\":\"Natalia\",\"Cognoms\":\"VICENTE BOI\",\"2\":\"VICENTE BOI\",\"Direccio\":\"dada\",\"3\":\"dada\",\"CP\":\"42342\",\"4\":\"42342\",\"Poblacio\":\"fsdaf\",\"5\":\"fsdaf\",\"Sexe\":\"Home\",\"6\":\"Home\",\"DataNaixement\":\"1961-01-27\",\"7\":\"1961-01-27\",\"PaisNaixement\":\"Espanya\",\"8\":\"Espanya\",\"Nacionalitat\":\"espanyola (E)\",\"9\":\"espanyola (E)\",\"LocalitatNaixement\":\"SUECA\",\"10\":\"SUECA\",\"ProvinciaNaixement\":\"valencia\",\"11\":\"valencia\",\"Email\":\"mdeviboi@gmail.com\",\"12\":\"mdeviboi@gmail.com\",\"Telefon\":\"2147483647\",\"13\":\"2147483647\",\"Comentaris\":\"\",\"14\":\"\",\"passwd_moodle\":\"1234\",\"15\":\"1234\"},{\"DNI\":\"44444444L\",\"0\":\"44444444L\",\"Nom\":\"Nom1\",\"1\":\"Nom1\",\"Cognoms\":\"VICENTE B\\u00d3IX\",\"2\":\"VICENTE B\\u00d3IX\",\"Direccio\":\"Juan de juanes 4\",\"3\":\"Juan de juanes 4\",\"CP\":\"4654\",\"4\":\"4654\",\"Poblacio\":\"sueca\",\"5\":\"sueca\",\"Sexe\":\"Dona\",\"6\":\"Dona\",\"DataNaixement\":\"1970-01-01\",\"7\":\"1970-01-01\",\"PaisNaixement\":\"fdsfs\",\"8\":\"fdsfs\",\"Nacionalitat\":\"espanyola (E)\",\"9\":\"espanyola (E)\",\"LocalitatNaixement\":\"SUECA\",\"10\":\"SUECA\",\"ProvinciaNaixement\":\"alacant\",\"11\":\"alacant\",\"Email\":\"mdeviboi@gmail.com\",\"12\":\"mdeviboi@gmail.com\",\"Telefon\":\"45646546\",\"13\":\"45646546\",\"Comentaris\":\"\",\"14\":\"\",\"passwd_moodle\":\"1234\",\"15\":\"1234\"}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Resposta del tipus d'error donat, si la base de dades dóna un error serà el que mostrarà.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": \"SQLSTATE: ...\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./ajax.js",
    "groupTitle": "Configuraci_"
  },
  {
    "type": "get",
    "url": "/php/index.php/ConsultaMatriculatsCursinoAssignatsGrupGES/:curs",
    "title": "Llistats GES no assignats",
    "name": "Curs1",
    "group": "Cursos_GES",
    "description": "<p>Amb aquesta petició consultem els alumnes que hi han matriculats a un curs que encara no estan assignats a GES.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "curs",
            "description": "<p>Codi del curs al que pertany.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "-",
            "description": "<p>Torna un Json amb totes les dades demanades, amb els cursos que estan en la base de dades en eixe moment.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Nom",
            "description": "<p>Nom del alumne</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Cognoms",
            "description": "<p>Cognoms de l'alumne</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "DNI",
            "description": "<p>DNI de l'alumne</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Grup",
            "description": "<p>En quin curs està matriculat</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "    HTTP/1.1 200 OK\n\t\t[{\"Nom\":\"000000002\",\"0\":\"000000002\",\"Cognoms\":\"000000002\",\"1\":\"000000002\",\"DNI\":\"000000002\",\"2\":\"000000002\",\"Grup\":\"GES21A\",\"3\":\"GES21A\"},{\"Nom\":\"000000013\",\"0\":\"000000013\",\"Cognoms\":\"000000013\",\"1\":\"000000013\",\"DNI\":\"000000013\",\"2\":\"000000013\",\"Grup\":\"GES21A\",\"3\":\"GES21A\"},{\"Nom\":\"00001234\",\"0\":\"00001234\",\"Cognoms\":\"00001234A\",\"1\":\"00001234A\",\"DNI\":\"00000009A\",\"2\":\"00000009A\",\"Grup\":\"GES21A\",\"3\":\"GES21A\"},{\"Nom\":\"Natalia\",\"0\":\"Natalia\",\"Cognoms\":\"Rico\",\"1\":\"Rico\",\"DNI\":\"45785213w\",\"2\":\"45785213w\",\"Grup\":\"GES21A\",\"3\":\"GES21A\"},{\"Nom\":\"\\u00c1LFREDO\",\"0\":\"\\u00c1LFREDO\",\"Cognoms\":\"VICENTE B\\u00d3IX\",\"1\":\"VICENTE B\\u00d3IX\",\"DNI\":\"32659874W\",\"2\":\"32659874W\",\"Grup\":\"GES21A\",\"3\":\"GES21A\"}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./cursosges.js",
    "groupTitle": "Cursos_GES"
  },
  {
    "type": "get",
    "url": "/php/index.php/ConsultaMatriculatsCursinoAssignatsGrupGES/:curs",
    "title": "Llistats GES no assignats 2",
    "name": "Curs2",
    "group": "Cursos_GES",
    "description": "<p>Amb aquesta petició consultem els alumnes que hi han matriculats a un curs que encara no estan assignats a GES.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "curs",
            "description": "<p>Codi del curs al que pertany.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "-",
            "description": "<p>Torna un Json amb totes les dades demanades, amb els cursos que estan en la base de dades en eixe moment.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Nom",
            "description": "<p>Nom del alumne</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Cognoms",
            "description": "<p>Cognoms de l'alumne</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "DNI",
            "description": "<p>DNI de l'alumne</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Grup",
            "description": "<p>En quin curs està matriculat</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "    HTTP/1.1 200 OK\n\t   [{\"Nom\":\"000000011\",\"0\":\"000000011\",\"Cognoms\":\"000000011\",\"1\":\"000000011\",\"DNI\":\"000000011\",\"2\":\"000000011\",\"Grup\":\"GES21E\",\"3\":\"GES21E\"},{\"Nom\":\"000000018\",\"0\":\"000000018\",\"Cognoms\":\"000000018\",\"1\":\"000000018\",\"DNI\":\"000000018\",\"2\":\"000000018\",\"Grup\":\"GES21E\",\"3\":\"GES21E\"},{\"Nom\":\"00001234\",\"0\":\"00001234\",\"Cognoms\":\"00001234A\",\"1\":\"00001234A\",\"DNI\":\"00000009B\",\"2\":\"00000009B\",\"Grup\":\"GES21E\",\"3\":\"GES21E\"}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./cursosges.js",
    "groupTitle": "Cursos_GES"
  },
  {
    "type": "post",
    "url": "/php/index.php/Inserta_Grup",
    "title": "Inserta a Grup",
    "name": "Inserta_Grup",
    "group": "Cursos_GES",
    "description": "<p>Amb aquesta petició insertem un alumne en un grup de GES.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dni",
            "description": "<p>dni de l'alumne que volem assignar/canbiar de grup.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "curs",
            "description": "<p>Codi del curs al que pertany.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>En el cas de que intente assignar-se a un lloc sense curs.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": \"\"No pots possar alumnes en aquesta opció perquè no es guardaran a cap grup\"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./cursosges.js",
    "groupTitle": "Cursos_GES"
  },
  {
    "type": "get",
    "url": "/php/index.php/ConsultaMatriculatsCursinoAssignatsGrupGES/:curs",
    "title": "Llistats GES no assignats",
    "name": "Curs1",
    "group": "Cursos_GES_2",
    "description": "<p>Amb aquesta petició consultem els alumnes que hi han matriculats a un curs que encara no estan assignats a GES.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "curs",
            "description": "<p>Codi del curs al que pertany.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "-",
            "description": "<p>Torna un Json amb totes les dades demanades, amb els cursos que estan en la base de dades en eixe moment.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Nom",
            "description": "<p>Nom del alumne</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Cognoms",
            "description": "<p>Cognoms de l'alumne</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "DNI",
            "description": "<p>DNI de l'alumne</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Grup",
            "description": "<p>En quin curs està matriculat</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "    HTTP/1.1 200 OK\n\t\t[{\"Nom\":\"000000002\",\"0\":\"000000002\",\"Cognoms\":\"000000002\",\"1\":\"000000002\",\"DNI\":\"000000002\",\"2\":\"000000002\",\"Grup\":\"GES21A\",\"3\":\"GES21A\"},{\"Nom\":\"000000013\",\"0\":\"000000013\",\"Cognoms\":\"000000013\",\"1\":\"000000013\",\"DNI\":\"000000013\",\"2\":\"000000013\",\"Grup\":\"GES21A\",\"3\":\"GES21A\"},{\"Nom\":\"00001234\",\"0\":\"00001234\",\"Cognoms\":\"00001234A\",\"1\":\"00001234A\",\"DNI\":\"00000009A\",\"2\":\"00000009A\",\"Grup\":\"GES21A\",\"3\":\"GES21A\"},{\"Nom\":\"Natalia\",\"0\":\"Natalia\",\"Cognoms\":\"Rico\",\"1\":\"Rico\",\"DNI\":\"45785213w\",\"2\":\"45785213w\",\"Grup\":\"GES21A\",\"3\":\"GES21A\"},{\"Nom\":\"\\u00c1LFREDO\",\"0\":\"\\u00c1LFREDO\",\"Cognoms\":\"VICENTE B\\u00d3IX\",\"1\":\"VICENTE B\\u00d3IX\",\"DNI\":\"32659874W\",\"2\":\"32659874W\",\"Grup\":\"GES21A\",\"3\":\"GES21A\"}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./cursosges2.js",
    "groupTitle": "Cursos_GES_2"
  },
  {
    "type": "get",
    "url": "/php/index.php/ConsultaMatriculatsCursinoAssignatsGrupGES/:curs",
    "title": "Llistats GES no assignats 2",
    "name": "Curs2",
    "group": "Cursos_GES_2",
    "description": "<p>Amb aquesta petició consultem els alumnes que hi han matriculats a un curs que encara no estan assignats a GES.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "curs",
            "description": "<p>Codi del curs al que pertany.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "-",
            "description": "<p>Torna un Json amb totes les dades demanades, amb els cursos que estan en la base de dades en eixe moment.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Nom",
            "description": "<p>Nom del alumne</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Cognoms",
            "description": "<p>Cognoms de l'alumne</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "DNI",
            "description": "<p>DNI de l'alumne</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Grup",
            "description": "<p>En quin curs està matriculat</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "    HTTP/1.1 200 OK\n\t   [{\"Nom\":\"000000011\",\"0\":\"000000011\",\"Cognoms\":\"000000011\",\"1\":\"000000011\",\"DNI\":\"000000011\",\"2\":\"000000011\",\"Grup\":\"GES21E\",\"3\":\"GES21E\"},{\"Nom\":\"000000018\",\"0\":\"000000018\",\"Cognoms\":\"000000018\",\"1\":\"000000018\",\"DNI\":\"000000018\",\"2\":\"000000018\",\"Grup\":\"GES21E\",\"3\":\"GES21E\"},{\"Nom\":\"00001234\",\"0\":\"00001234\",\"Cognoms\":\"00001234A\",\"1\":\"00001234A\",\"DNI\":\"00000009B\",\"2\":\"00000009B\",\"Grup\":\"GES21E\",\"3\":\"GES21E\"}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./cursosges2.js",
    "groupTitle": "Cursos_GES_2"
  },
  {
    "type": "post",
    "url": "/php/index.php/Inserta_Grup",
    "title": "Inserta a Grup",
    "name": "Inserta_Grup",
    "group": "Cursos_GES_2",
    "description": "<p>Amb aquesta petició insertem un alumne en un grup de GES.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dni",
            "description": "<p>dni de l'alumne que volem assignar/canbiar de grup.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "curs",
            "description": "<p>Codi del curs al que pertany.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>En el cas de que intente assignar-se a un lloc sense curs.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": \"\"No pots possar alumnes en aquesta opció perquè no es guardaran a cap grup\"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./cursosges2.js",
    "groupTitle": "Cursos_GES_2"
  },
  {
    "type": "get",
    "url": "/php/index.php/BorraAssigGrups",
    "title": "Borrar totes les assignacions a un grup",
    "name": "BorrarCursosllistat",
    "group": "Cursos_GES_llistat",
    "description": "<p>Amb aquesta petició borrem tots els alumnes assignats a un grup.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "curs",
            "description": "<p>Codi del curs al que pertany.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./cursosgesllist.js",
    "groupTitle": "Cursos_GES_llistat"
  },
  {
    "type": "get",
    "url": "/php/index.php/ConsultaMatriculatsCursinoAssignatsGrupGES/:curs",
    "title": "Llistats GES no assignats per llistat",
    "name": "Curs1llistat",
    "group": "Cursos_GES_llistat",
    "description": "<p>Amb aquesta petició consultem els alumnes que hi han matriculats a un curs que encara no estan assignats a GES. Aquesta funció genera el llistat.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "curs",
            "description": "<p>Codi del curs al que pertany.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "-",
            "description": "<p>Torna un Json amb totes les dades demanades, amb els cursos que estan en la base de dades en eixe moment.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Nom",
            "description": "<p>Nom del alumne</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Cognoms",
            "description": "<p>Cognoms de l'alumne</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "DNI",
            "description": "<p>DNI de l'alumne</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Grup",
            "description": "<p>En quin curs està matriculat</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "    HTTP/1.1 200 OK\n\t   [{\"Nom\":\"000000011\",\"0\":\"000000011\",\"Cognoms\":\"000000011\",\"1\":\"000000011\",\"DNI\":\"000000011\",\"2\":\"000000011\",\"Grup\":\"GES21E\",\"3\":\"GES21E\"},{\"Nom\":\"000000018\",\"0\":\"000000018\",\"Cognoms\":\"000000018\",\"1\":\"000000018\",\"DNI\":\"000000018\",\"2\":\"000000018\",\"Grup\":\"GES21E\",\"3\":\"GES21E\"},{\"Nom\":\"00001234\",\"0\":\"00001234\",\"Cognoms\":\"00001234A\",\"1\":\"00001234A\",\"DNI\":\"00000009B\",\"2\":\"00000009B\",\"Grup\":\"GES21E\",\"3\":\"GES21E\"}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./cursosgesllist.js",
    "groupTitle": "Cursos_GES_llistat"
  },
  {
    "type": "post",
    "url": "/php/index.php/Inserta_Grup",
    "title": "Inserta a Grup",
    "name": "Inserta_Grup",
    "group": "Cursos_GES_llistat",
    "description": "<p>Amb aquesta petició insertem un alumne en un grup de GES.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dni",
            "description": "<p>dni de l'alumne que volem assignar/canbiar de grup.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "curs",
            "description": "<p>Codi del curs al que pertany.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./cursosgesllist.js",
    "groupTitle": "Cursos_GES_llistat"
  },
  {
    "type": "post",
    "url": "/php/index.php/arxiu_csv",
    "title": "Genera csv",
    "name": "Genera_document1",
    "group": "Exporta_arxius",
    "description": "<p>Amb aquesta petició generem un document pdf on està el llistat dels alumnes segons els camps que hagem escollit. Es pot escollir tant el grup que es vol tnir o el grup de GES.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "camps",
            "description": "<p>Array amb tots els camps que es volen presentar al document.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "curs",
            "description": "<p>Codi del curs al que pertany.</p>"
          },
          {
            "group": "Parameter",
            "type": "bit",
            "optional": false,
            "field": "Matriculat",
            "description": "<p>Paràmetre per indicar si volem només els matriculats (on) o tots, en eixe cas no hi ha paràmetre.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "csv",
            "optional": false,
            "field": "Sortidagrup",
            "description": "<p>(CURS).csv Es gnera un document amb el nom del grup</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./exportaarxius.js",
    "groupTitle": "Exporta_arxius"
  },
  {
    "type": "post",
    "url": "/php/index.php/arxiu_pdf",
    "title": "Genera llistat pdf",
    "name": "Genera_document1",
    "group": "Exporta_arxius",
    "description": "<p>Amb aquesta petició generem un document pdf on està el llistat dels alumnes segons els camps que hagem escollit. Es pot escollir tant el grup que es vol tnir o el grup de GES.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "camps",
            "description": "<p>Array amb tots els camps que es volen presentar al document.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "curs",
            "description": "<p>Codi del curs al que pertany.</p>"
          },
          {
            "group": "Parameter",
            "type": "bit",
            "optional": false,
            "field": "Matriculat",
            "description": "<p>Paràmetre per indicar si volem només els matriculats (on) o tots, en eixe cas no hi ha paràmetre.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "pdf",
            "optional": false,
            "field": "Sortidagrup",
            "description": "<p>(CURS).pdf Es gnera un document amb el nom del grup</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./exportaarxius.js",
    "groupTitle": "Exporta_arxius"
  },
  {
    "type": "post",
    "url": "/php/index.php/arxiu_orla",
    "title": "Genera Orla",
    "name": "Genera_document_orla1",
    "group": "Exporta_arxius",
    "description": "<p>Generem un document pdf amb les fotografies de tots els alumnes del grup/curs escollit.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "curs",
            "description": "<p>Codi del curs al que pertany.</p>"
          },
          {
            "group": "Parameter",
            "type": "bit",
            "optional": false,
            "field": "Matriculat",
            "description": "<p>Paràmetre per indicar si volem només els matriculats (on) o tots, en eixe cas no hi ha paràmetre.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "pdf",
            "optional": false,
            "field": "Sortidagrup",
            "description": "<p>(CURS).csv Es gnera un document amb el nom del grup que és enllaçat posteriorment</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./exportaarxius.js",
    "groupTitle": "Exporta_arxius"
  },
  {
    "type": "get",
    "url": "/php/index.php/arxiu_moodle/:curs",
    "title": "Genera Moodle",
    "name": "Genera_documentmoodle",
    "group": "Exporta_arxius",
    "description": "<p>Amb aquesta generem un document pdf amb les fotografies de tots els alumnes del grup/curs escollit.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "curs",
            "description": "<p>Codi del curs al que pertany.</p>"
          },
          {
            "group": "Parameter",
            "type": "bit",
            "optional": false,
            "field": "Matriculat",
            "description": "<p>Paràmetre per indicar si volem només els matriculats (on) o tots, en eixe cas no hi ha paràmetre.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "csv",
            "optional": false,
            "field": "Sortidagrup",
            "description": "<p>(CURS).txt Es genera un document amb el nom del grup, per a pdoer ser importat permoodle.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./exportaarxius.js",
    "groupTitle": "Exporta_arxius"
  },
  {
    "type": "post",
    "url": "/php/index.php/arxiu_txt",
    "title": "Genera txt",
    "name": "Genera_documenttxt1",
    "group": "Exporta_arxius",
    "description": "<p>Amb aquesta petició generem un document pdf on està el llistat dels alumnes segons els camps que hagem escollit. Es pot escollir tant el grup que es vol tnir o el grup de GES.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "camps",
            "description": "<p>Array amb tots els camps que es volen presentar al document.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "curs",
            "description": "<p>Codi del curs al que pertany.</p>"
          },
          {
            "group": "Parameter",
            "type": "bit",
            "optional": false,
            "field": "Matriculat",
            "description": "<p>Paràmetre per indicar si volem només els matriculats (on) o tots, en eixe cas no hi ha paràmetre.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "txt",
            "optional": false,
            "field": "Sortidagrup",
            "description": "<p>(CURS).txt Es gnera un document amb el nom del grup</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./exportaarxius.js",
    "groupTitle": "Exporta_arxius"
  },
  {
    "type": "post",
    "url": "/php/index.php/carregafoto",
    "title": "Carrega foto",
    "name": "upload",
    "group": "Fotografia",
    "description": "<p>Envia la foto per a guardar-la al servidor.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dni",
            "description": "<p>Dni de l'alumne al qui pertany la fotografia.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "foto",
            "description": "<p>Fotografia.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./webcam.js",
    "groupTitle": "Fotografia"
  },
  {
    "type": "get",
    "url": "/php/index.php/matricula_sorteig",
    "title": "Matricula alumnes sorteig",
    "name": "matricula_sorteig",
    "group": "Organitza_Cursos",
    "description": "<p>Una vegada acabat el procés de matrícula es realitza un sorteig sobre totes les peticions, però només entren una quantitat d'alumnes.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "Array",
            "description": "<p>amb tots els dnis de la gent que es va a matriucular.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Resposta del tipus d'error donat, si la base de dades dóna un error serà el que mostrarà.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": \"SQLSTATE: ...\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./sorteig.js",
    "groupTitle": "Organitza_Cursos"
  },
  {
    "type": "get",
    "url": "/php/index.php/sorteig_lletra/:lletra/:curs/:quan",
    "title": "Fer sorteig",
    "name": "sorteig",
    "group": "Organitza_Cursos",
    "description": "<p>Una vegada acabat el procés de matrícula es realitza un sorteig sobre totes les peticions, però només entren una quantitat d'alumnes.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "char",
            "optional": false,
            "field": "lletra",
            "description": "<p>que ha sortit com a resultat del sorteig.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "curs",
            "description": "<p>Curs del qual s'està fent el sorteig.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "quan",
            "description": "<p>Quantitatde gent que entra en el curs</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "-",
            "description": "<p>Torna un Json amb totes les dades demanades, amb els cursos que estan en la base de dades en eixe moment.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Nom",
            "description": "<p>Nom del alumne</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Cognoms",
            "description": "<p>Cognoms de l'alumne</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "DNI",
            "description": "<p>DNI de l'alumne</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n\n[{\"DNI\":\"45785213w\",\"0\":\"45785213w\",\"Nom\":\"Natalia\",\"1\":\"Natalia\",\"Cognoms\":\"Rico\",\"2\":\"Rico\"},{\"DNI\":\"99999999F\",\"0\":\"99999999F\",\"Nom\":\"Natalia\",\"1\":\"Natalia\",\"Cognoms\":\"Rico\",\"2\":\"Rico\"},{\"DNI\":\"99999991A\",\"0\":\"99999991A\",\"Nom\":\"Jose Luis\",\"1\":\"Jose Luis\",\"Cognoms\":\"RRrr\",\"2\":\"RRrr\"},{\"DNI\":\"32569814q\",\"0\":\"32569814q\",\"Nom\":\"\\u00c1LFREDO\",\"1\":\"\\u00c1LFREDO\",\"Cognoms\":\"VICENTE B\\u00d3IX\",\"2\":\"VICENTE B\\u00d3IX\"},{\"DNI\":\"98765432Q\",\"0\":\"98765432Q\",\"Nom\":\"\\u00c1LFREDO\",\"1\":\"\\u00c1LFREDO\",\"Cognoms\":\"VICENTE B\\u00d3IX\",\"2\":\"VICENTE B\\u00d3IX\"},{\"DNI\":\"32659874W\",\"0\":\"32659874W\",\"Nom\":\"\\u00c1LFREDO\",\"1\":\"\\u00c1LFREDO\",\"Cognoms\":\"VICENTE B\\u00d3IX\",\"2\":\"VICENTE B\\u00d3IX\"},{\"DNI\":\"73567572W\",\"0\":\"73567572W\",\"Nom\":\"\\u00c1LFREDO\",\"1\":\"\\u00c1LFREDO\",\"Cognoms\":\"VICENTE BOIX\",\"2\":\"VICENTE BOIX\"},{\"DNI\":\"000000010\",\"0\":\"000000010\",\"Nom\":\"000000002\",\"1\":\"000000002\",\"Cognoms\":\"000000002\",\"2\":\"000000002\"},{\"DNI\":\"000000003\",\"0\":\"000000003\",\"Nom\":\"000000003\",\"1\":\"000000003\",\"Cognoms\":\"000000003\",\"2\":\"000000003\"},{\"DNI\":\"000000011\",\"0\":\"000000011\",\"Nom\":\"000000011\",\"1\":\"000000011\",\"Cognoms\":\"000000011\",\"2\":\"000000011\"}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Resposta del tipus d'error donat, si la base de dades dóna un error serà el que mostrarà.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": \"SQLSTATE: ...\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./sorteig.js",
    "groupTitle": "Organitza_Cursos"
  },
  {
    "type": "get",
    "url": "/php/index.php/ConsultaMatriculatsCursinoAssignatsGrupGES/:curs",
    "title": "Consulta estudiants de GES no assignats a grup",
    "name": "llistats_cursos_ges",
    "group": "Organitza_GES",
    "description": "<p>Busca els estudiants que estan matriculats a un curs de GES i no estan assignats a cap grup.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "curs",
            "description": "<p>Curs del qual volem saber les dades.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "-",
            "description": "<p>Torna un Json amb totes les dades demanades, amb els cursos que estan en la base de dades en eixe moment.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Nom",
            "description": "<p>Nom del alumne</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Cognoms",
            "description": "<p>Cognoms de l'alumne</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "DNI",
            "description": "<p>DNI de l'alumne</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "CursCodi",
            "description": "<p>En quin curs està matriculat</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n[{\"Nom\":\"Natalia\",\"0\":\"Natalia\",\"Cognoms\":\"pdfso\",\"1\":\"pdfso\",\"DNI\":\"00001093R\",\"2\":\"00001093R\",\"CursCodi\":\"G22m\",\"3\":\"G22m\"},{\"Nom\":\"Natalia\",\"0\":\"Natalia\",\"Cognoms\":\"pdfso\",\"1\":\"pdfso\",\"DNI\":\"00001094D\",\"2\":\"00001094D\",\"CursCodi\":\"G22m\",\"3\":\"G22m\"},{\"Nom\":\"\\u00c1LFREDO\",\"0\":\"\\u00c1LFREDO\",\"Cognoms\":\"VICENTE B\\u00d3IX\",\"1\":\"VICENTE B\\u00d3IX\",\"DNI\":\"73567572Z\",\"2\":\"73567572Z\",\"CursCodi\":\"G22m\",\"3\":\"G22m\"}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Resposta del tipus d'error donat, si la base de dades dóna un error serà el que mostrarà.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": \"SQLSTATE: ...\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./ajax.js",
    "groupTitle": "Organitza_GES"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./doc/main.js",
    "group": "_home_alviboi_workspace_tfm2_js_doc_main_js",
    "groupTitle": "_home_alviboi_workspace_tfm2_js_doc_main_js",
    "name": ""
  },
  {
    "type": "get",
    "url": "/php/index.php/ConsultaCamps/Estudiant",
    "title": "Consulta camps de la taula Estudiant",
    "name": "busc_camps_estudiant",
    "group": "arxius",
    "description": "<p>Es demanen tots els camps que hi han a la taula Estudiant.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "-",
            "description": "<p>Torna un Json amb totes les dades demanades, amb els camps que estan en la base de dades Estudiant.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "camps",
            "description": "<p>Aquesta variables es repetic tantes vegades com camps hi han a la base de dades</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n[{\"camp\":\"DNI\",\"0\":\"DNI\"},{\"camp\":\"Nom\",\"0\":\"Nom\"},{\"camp\":\"Cognoms\",\"0\":\"Cognoms\"},{\"camp\":\"Direccio\",\"0\":\"Direccio\"},{\"camp\":\"CP\",\"0\":\"CP\"},{\"camp\":\"Poblacio\",\"0\":\"Poblacio\"},{\"camp\":\"Sexe\",\"0\":\"Sexe\"},{\"camp\":\"DataNaixement\",\"0\":\"DataNaixement\"},{\"camp\":\"PaisNaixement\",\"0\":\"PaisNaixement\"},{\"camp\":\"Nacionalitat\",\"0\":\"Nacionalitat\"},{\"camp\":\"LocalitatNaixement\",\"0\":\"LocalitatNaixement\"},{\"camp\":\"ProvinciaNaixement\",\"0\":\"ProvinciaNaixement\"},{\"camp\":\"Email\",\"0\":\"Email\"},{\"camp\":\"Telefon\",\"0\":\"Telefon\"},{\"camp\":\"Comentaris\",\"0\":\"Comentaris\"},{\"camp\":\"passwd_moodle\",\"0\":\"passwd_moodle\"}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Resposta del tipus d'error donat, si la base de dades dóna un error serà el que mostrarà.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": \"SQLSTATE: ...\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./ajax.js",
    "groupTitle": "arxius"
  },
  {
    "type": "get",
    "url": "/php/index.php/ConsultaCursosTots",
    "title": "Consulta tots els cursos",
    "name": "busc_cursos_tots_llistat",
    "group": "arxius",
    "description": "<p>Es demanen tots els cursos ofertats i no ofertats en eixe moment, o siga tots els qui estan donats de alta en la base de dades, i emplena les dades necessàries en l'apartat d'arxius.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "-",
            "description": "<p>Torna un Json amb totes les dades demanades, amb els cursos que estan en la base de dades en eixe moment.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Codi",
            "description": "<p>Codi del curs</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Curs",
            "description": "<p>Nom complet del curs</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Camp",
            "description": "<p>Camps del curs</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n\n [{\"Codi\":\"AcGSv\",\"0\":\"AcGSv\",\"Curs\":\"Acc\\u00e9s CFGS vesprada\",\"1\":\"Acc\\u00e9s CFGS vesprada\",\"Ofertat\":\"1\",\"2\":\"1\",\"Camp\":\"ProgramaBDCursosPolivalents\",\"3\":\"ProgramaBDCursosPolivalents\"},{\"Codi\":\"AcUNm\",\"0\":\"AcUNm\",\"Curs\":\"Acc\\u00e9s Universitat mat\\u00ed\",\"1\":\"Acc\\u00e9s Universitat mat\\u00ed\",\"Ofertat\":\"1\",\"2\":\"1\",\"Camp\":\"ProgramaBDCursosPolivalents\",\"3\":\"ProgramaBDCursosPolivalents\"},{\"Codi\":\"ALFm\",\"0\":\"ALFm\",\"Curs\":\"ALFA mat\\u00ed\",\"1\":\"ALFA mat\\u00ed\",\"Ofertat\":\"1\",\"2\":\"1\",\"Camp\":\"ProgramaACicleI\",\"3\":\"ProgramaACicleI\"},{\"Codi\":\"ALFv\",\"0\":\"ALFv\",\"Curs\":\"ALFA vesprada\",\"1\":\"ALFA vesprada\",\"Ofertat\":\"1\",\"2\":\"1\",\"Camp\":\"ProgramaACicleI\",\"3\":\"ProgramaACicleI\"},{\"Codi\":\"CA1Angm\",\"0\":\"CA1Angm\",\"Curs\":\"Certificat A1 Angl\\u00e8s mat\\u00ed\",\"1\":\"Certificat A1 Angl\\u00e8s mat\\u00ed\",\"Ofertat\":\"1\",\"2\":\"1\",\"Camp\":\"ProgramaJAnglesBasic\",\"3\":\"ProgramaJAnglesBasic\"},{\"Codi\":\"CA2Angm\",\"0\":\"CA2Angm\",\"Curs\":\"Certificat A2 Angl\\u00e8s mat\\u00ed\",\"1\":\"Certificat A2 Angl\\u00e8s mat\\u00ed\",\"Ofertat\":\"1\",\"2\":\"1\",\"Camp\":\"ProgramaJAnglesBasic\",\"3\":\"ProgramaJAnglesBasic\"},{\"Codi\":\"CB1Angm\",\"0\":\"CB1Angm\",\"Curs\":\"Certificat B1 Angl\\u00e8s mat\\u00ed\",\"1\":\"Certificat B1 Angl\\u00e8s mat\\u00ed\",\"Ofertat\":\"1\",\"2\":\"1\",\"Camp\":\"ProgramaJAnglesBasic\",\"3\":\"ProgramaJAnglesBasic\"},{\"Codi\":\"Elm\",\"0\":\"Elm\",\"Curs\":\"ELEMENTAL mat\\u00ed\",\"1\":\"ELEMENTAL mat\\u00ed\",\"Ofertat\":\"1\",\"2\":\"1\",\"Camp\":\"ProgramaCValenciaJQCV\",\"3\":\"ProgramaCValenciaJQCV\"},{\"Codi\":\"G21m\",\"0\":\"G21m\",\"Curs\":\"GES2.1 mat\\u00ed\",\"1\":\"GES2.1 mat\\u00ed\",\"Ofertat\":\"1\",\"2\":\"1\",\"Camp\":\"ProgramaBcicleII\",\"3\":\"ProgramaBcicleII\"},{\"Codi\":\"G21V\",\"0\":\"G21V\",\"Curs\":\"GES2.1 vesprada\",\"1\":\"GES2.1 vesprada\",\"Ofertat\":\"1\",\"2\":\"1\",\"Camp\":\"ProgramaBcicleII\",\"3\":\"ProgramaBcicleII\"},{\"Codi\":\"G22d\",\"0\":\"G22d\",\"Curs\":\"GES2.2 dist\\u00e0ncia\",\"1\":\"GES2.2 dist\\u00e0ncia\",\"Ofertat\":\"1\",\"2\":\"1\",\"Camp\":\"ProgramaBcicleII\",\"3\":\"ProgramaBcicleII\"},{\"Codi\":\"G22m\",\"0\":\"G22m\",\"Curs\":\"GES2.2 mat\\u00ed\",\"1\":\"GES2.2 mat\\u00ed\",\"Ofertat\":\"1\",\"2\":\"1\",\"Camp\":\"ProgramaBcicleII\",\"3\":\"ProgramaBcicleII\"},{\"Codi\":\"G22v\",\"0\":\"G22v\",\"Curs\":\"GES2.2 vesprada\",\"1\":\"GES2.2 vesprada\",\"Ofertat\":\"1\",\"2\":\"1\",\"Camp\":\"ProgramaBcicleII\",\"3\":\"ProgramaBcicleII\"},{\"Codi\":\"Mim\",\"0\":\"Mim\",\"Curs\":\"MITJ\\u00c0 mat\\u00ed\",\"1\":\"MITJ\\u00c0 mat\\u00ed\",\"Ofertat\":\"1\",\"2\":\"1\",\"Camp\":\"ProgramaCValenciaJQCV\",\"3\":\"ProgramaCValenciaJQCV\"},{\"Codi\":\"Orv\",\"0\":\"Orv\",\"Curs\":\"ORAL vesprada\",\"1\":\"ORAL vesprada\",\"Ofertat\":\"1\",\"2\":\"1\",\"Camp\":\"ProgramaCValenciaJQCV\",\"3\":\"ProgramaCValenciaJQCV\"},{\"Codi\":\"SUPv\",\"0\":\"SUPv\",\"Curs\":\"SUPERIOR vesprada\",\"1\":\"SUPERIOR vesprada\",\"Ofertat\":\"1\",\"2\":\"1\",\"Camp\":\"ProgramaCValenciaJQCV\",\"3\":\"ProgramaCValenciaJQCV\"},{\"Codi\":\"TAL13m\",\"0\":\"TAL13m\",\"Curs\":\"TALLER1.3 mat\\u00ed\",\"1\":\"TALLER1.3 mat\\u00ed\",\"Ofertat\":\"1\",\"2\":\"1\",\"Camp\":\"ProgramaACicleI\",\"3\":\"ProgramaACicleI\"},{\"Codi\":\"TAL13v\",\"0\":\"TAL13v\",\"Curs\":\"TALLER1.3 vesprada\",\"1\":\"TALLER1.3 vesprada\",\"Ofertat\":\"1\",\"2\":\"1\",\"Camp\":\"ProgramaACicleI\",\"3\":\"ProgramaACicleI\"},{\"Codi\":\"TALAngm\",\"0\":\"TALAngm\",\"Curs\":\"Taller angles mat\\u00ed\",\"1\":\"Taller angles mat\\u00ed\",\"Ofertat\":\"1\",\"2\":\"1\",\"Camp\":\"ProgramaJAnglesBasic\",\"3\":\"ProgramaJAnglesBasic\"},{\"Codi\":\"TALAngv\",\"0\":\"TALAngv\",\"Curs\":\"Taller angles vesprada\",\"1\":\"Taller angles vesprada\",\"Ofertat\":\"1\",\"2\":\"1\",\"Camp\":\"ProgramaJAnglesBasic\",\"3\":\"ProgramaJAnglesBasic\"}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Resposta del tipus d'error donat, si la base de dades dóna un error serà el que mostrarà.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": \"SQLSTATE: ...\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./ajax.js",
    "groupTitle": "arxius"
  },
  {
    "type": "post",
    "url": "/php/index.php/GuardaCursos",
    "title": "Desa es cursos ofertats",
    "name": "actualitza_cursos",
    "group": "configuraci_",
    "description": "<p>Amb aquesta petició desarem tots els cursos ofertats.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "check",
            "description": "<p>Array amb tots els codis dels cursos ofertats.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Resposta del tipus d'error donat, si la base de dades dóna un error serà el que mostrarà.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": \"SQLSTATE[]: ...\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./configuracio.js",
    "groupTitle": "configuraci_"
  },
  {
    "type": "post",
    "url": "/php/index.php/borra_curs",
    "title": "Esborrar curs",
    "name": "borra_curs",
    "group": "configuraci_",
    "description": "<p>Amb aquesta petició donarem esborrarem un curs.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "curs",
            "description": "<p>Codi del curs a esborrar.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Resposta del tipus d'error donat, si la base de dades dóna un error serà el que mostrarà.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": \"SQLSTATE[]: ...\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./configuracio.js",
    "groupTitle": "configuraci_"
  },
  {
    "type": "post",
    "url": "/php/index.php/AltaCursos",
    "title": "Donar alta un curs",
    "name": "donar_alta_cursos",
    "group": "configuraci_",
    "description": "<p>Amb aquesta petició donarem d'alta un nou curs.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Codi_Curs",
            "description": "<p>Codi del nou curs a donar de alta.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Nom_del_Curs",
            "description": "<p>Nom del curs a donar de alta</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Camp_Curs",
            "description": "<p>Camps del curs al que pertany</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Resposta del tipus d'error donat, si la base de dades dóna un error serà el que mostrarà.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": \"SQLSTATE[]: ...\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./configuracio.js",
    "groupTitle": "configuraci_"
  },
  {
    "type": "post",
    "url": "/php/index.php/alta_usuari",
    "title": "Donar alta un usuari",
    "name": "donar_alta_usuari",
    "group": "configuraci_",
    "description": "<p>Amb aquesta petició donarem d'alta un nou usuari que podrà gestionar la base de dades</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Nom",
            "description": "<p>Nom personal del usuari que volem donar d'alta.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Usuari",
            "description": "<p>Usuari amb el que vol fer login</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Password",
            "description": "<p>Contrasenya per a poder accedir</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Resposta del tipus d'error donat, si la base de dades dóna un error serà el que mostrarà.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": \"SQLSTATE[23000]: Integrity constraint violation: 1062 Duplicate entry '1234' for key 'usuari'\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./configuracio.js",
    "groupTitle": "configuraci_"
  },
  {
    "type": "get",
    "url": "/php/index.php/ConsultaAnys",
    "title": "Consulta anys",
    "name": "busc_cursos_tots_llistat",
    "group": "llistats",
    "description": "<p>Es demanen tots els anys que hi ha a la base de dades</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Any",
            "description": "<p>Anys a la base de dades</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n[{\"Any\":\"2016\",\"0\":\"2016\"}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Resposta del tipus d'error donat, si la base de dades dóna un error serà el que mostrarà.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": \"SQLSTATE: ...\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./ajax.js",
    "groupTitle": "llistats"
  },
  {
    "type": "get",
    "url": "/php/index.php/ConsultaMatriculatsCurs/:curs/:any",
    "title": "Consulta tots els estudiants matriculats a un curs i un any determinat",
    "name": "busc_estudiant_cursos",
    "group": "llistats",
    "description": "<p>Es crea un llistat amb tots els estudiants matriculats a un curs.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "curs",
            "description": "<p>Curs del qual volem saber les dades.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "any",
            "description": "<p>Any del qual volem saber les dades</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "-",
            "description": "<p>Torna un Json amb totes les dades demanades, amb els cursos que estan en la base de dades en eixe moment.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Nom",
            "description": "<p>Nom del alumne</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Cognoms",
            "description": "<p>Cognoms de l'alumne</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "DNI",
            "description": "<p>DNI de l'alumne</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Telefon",
            "description": "<p>Telèfon de l'alumne</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Sexe",
            "description": "<p>Sexe de l'alumne</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "DataNaixement",
            "description": "<p>Data de Naixement de l'alumne</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "PaisNaixement",
            "description": "<p>País de Naixement de l'alumne</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Nacionalitat",
            "description": "<p>Nacionalitat de l'alumne</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "LocalitatNaixement",
            "description": "<p>Localitat de Naixement de l'alumne</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ProvinciaNaixement",
            "description": "<p>Provincia Naixement de l'alumne</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Direccio",
            "description": "<p>L'adreça de l'alumne</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "CP",
            "description": "<p>Codi Postal</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Poblacio",
            "description": "<p>On viu</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Email",
            "description": "<p>Correu electrònic</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Comentaris",
            "description": "<p>Comentaris sobre alguna specte a tenir en compte</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Optativa1",
            "description": "<p>Optativa per al grup GES, irrelevant si no estàmatriculat en GES</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Optativa2",
            "description": "<p>Optativa per al grup GES, irrelevant si no estàmatriculat en GES</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "Validada",
            "description": "<p>Si ha entregat tots els paper o no</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "CursCodi",
            "description": "<p>En quin curs està matriculat</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "Matriculat",
            "description": "<p>Si ha estat acceptat o no.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Camp",
            "description": "<p>Camp del Curs on està matriculat</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n[{\"DNI\":\"000000000\",\"0\":\"000000000\",\"Nom\":\"000000000\",\"1\":\"000000000\",\"Cognoms\":\"000000000\",\"2\":\"000000000\",\"Direccio\":\"000000000\",\"3\":\"000000000\",\"CP\":\"0\",\"4\":\"0\",\"Poblacio\":\"000000000\",\"5\":\"000000000\",\"Sexe\":\"Home\",\"6\":\"Home\",\"DataNaixement\":\"1977-04-08\",\"7\":\"1977-04-08\",\"PaisNaixement\":\"000000000\",\"8\":\"000000000\",\"Nacionalitat\":\"espanyola (E)\",\"9\":\"espanyola (E)\",\"LocalitatNaixement\":\"000000000\",\"10\":\"000000000\",\"ProvinciaNaixement\":\"000000000\",\"11\":\"000000000\",\"Email\":\"a@a.es\",\"12\":\"a@a.es\",\"Telefon\":\"0\",\"13\":\"0\",\"Comentaris\":\"\",\"14\":\"\",\"passwd_moodle\":\"uQ(b28209\",\"15\":\"uQ(b28209\"},{\"DNI\":\"33333333A\",\"0\":\"33333333A\",\"Nom\":\"Nom9\",\"1\":\"Nom9\",\"Cognoms\":\"Cagnom9\",\"2\":\"Cagnom9\",\"Direccio\":\"La meua\",\"3\":\"La meua\",\"CP\":\"46410\",\"4\":\"46410\",\"Poblacio\":\"sueca\",\"5\":\"sueca\",\"Sexe\":\"Dona\",\"6\":\"Dona\",\"DataNaixement\":\"1979-12-04\",\"7\":\"1979-12-04\",\"PaisNaixement\":\"Espanya\",\"8\":\"Espanya\",\"Nacionalitat\":\"espanyola (E)\",\"9\":\"espanyola (E)\",\"LocalitatNaixement\":\"Sueca\",\"10\":\"Sueca\",\"ProvinciaNaixement\":\"Valencia\",\"11\":\"Valencia\",\"Email\":\"alviboi@gmail.com\",\"12\":\"alviboi@gmail.com\",\"Telefon\":\"654722866\",\"13\":\"654722866\",\"Comentaris\":\"\",\"14\":\"\",\"passwd_moodle\":\"1234\",\"15\":\"1234\"},{\"DNI\":\"44444444F\",\"0\":\"44444444F\",\"Nom\":\"ALFREDO\",\"1\":\"ALFREDO\",\"Cognoms\":\"dadas\",\"2\":\"dadas\",\"Direccio\":\"dada\",\"3\":\"dada\",\"CP\":\"4532543\",\"4\":\"4532543\",\"Poblacio\":\"fsdaf\",\"5\":\"fsdaf\",\"Sexe\":\"Home\",\"6\":\"Home\",\"DataNaixement\":\"1973-04-13\",\"7\":\"1973-04-13\",\"PaisNaixement\":\"DSADA\",\"8\":\"DSADA\",\"Nacionalitat\":\"espanyola (E)\",\"9\":\"espanyola (E)\",\"LocalitatNaixement\":\"Sueca\",\"10\":\"Sueca\",\"ProvinciaNaixement\":\"alacant\",\"11\":\"alacant\",\"Email\":\"nataliues15@gmail.com\",\"12\":\"nataliues15@gmail.com\",\"Telefon\":\"654722866\",\"13\":\"654722866\",\"Comentaris\":\"\",\"14\":\"\",\"passwd_moodle\":\"1234\",\"15\":\"1234\"},{\"DNI\":\"44444444B\",\"0\":\"44444444B\",\"Nom\":\"ALFREDO\",\"1\":\"ALFREDO\",\"Cognoms\":\"dadas\",\"2\":\"dadas\",\"Direccio\":\"dada\",\"3\":\"dada\",\"CP\":\"4532543\",\"4\":\"4532543\",\"Poblacio\":\"fsdaf\",\"5\":\"fsdaf\",\"Sexe\":\"Home\",\"6\":\"Home\",\"DataNaixement\":\"1970-01-01\",\"7\":\"1970-01-01\",\"PaisNaixement\":\"DSADA\",\"8\":\"DSADA\",\"Nacionalitat\":\"espanyola (E)\",\"9\":\"espanyola (E)\",\"LocalitatNaixement\":\"Sueca\",\"10\":\"Sueca\",\"ProvinciaNaixement\":\"alacant\",\"11\":\"alacant\",\"Email\":\"nataliues15@gmail.com\",\"12\":\"nataliues15@gmail.com\",\"Telefon\":\"654722866\",\"13\":\"654722866\",\"Comentaris\":\"\",\"14\":\"\",\"passwd_moodle\":\"1234\",\"15\":\"1234\"},{\"DNI\":\"44444444K\",\"0\":\"44444444K\",\"Nom\":\"Natalia\",\"1\":\"Natalia\",\"Cognoms\":\"VICENTE BOI\",\"2\":\"VICENTE BOI\",\"Direccio\":\"dada\",\"3\":\"dada\",\"CP\":\"42342\",\"4\":\"42342\",\"Poblacio\":\"fsdaf\",\"5\":\"fsdaf\",\"Sexe\":\"Home\",\"6\":\"Home\",\"DataNaixement\":\"1961-01-27\",\"7\":\"1961-01-27\",\"PaisNaixement\":\"Espanya\",\"8\":\"Espanya\",\"Nacionalitat\":\"espanyola (E)\",\"9\":\"espanyola (E)\",\"LocalitatNaixement\":\"SUECA\",\"10\":\"SUECA\",\"ProvinciaNaixement\":\"valencia\",\"11\":\"valencia\",\"Email\":\"mdeviboi@gmail.com\",\"12\":\"mdeviboi@gmail.com\",\"Telefon\":\"2147483647\",\"13\":\"2147483647\",\"Comentaris\":\"\",\"14\":\"\",\"passwd_moodle\":\"1234\",\"15\":\"1234\"},{\"DNI\":\"44444444L\",\"0\":\"44444444L\",\"Nom\":\"Nom1\",\"1\":\"Nom1\",\"Cognoms\":\"VICENTE B\\u00d3IX\",\"2\":\"VICENTE B\\u00d3IX\",\"Direccio\":\"Juan de juanes 4\",\"3\":\"Juan de juanes 4\",\"CP\":\"4654\",\"4\":\"4654\",\"Poblacio\":\"sueca\",\"5\":\"sueca\",\"Sexe\":\"Dona\",\"6\":\"Dona\",\"DataNaixement\":\"1970-01-01\",\"7\":\"1970-01-01\",\"PaisNaixement\":\"fdsfs\",\"8\":\"fdsfs\",\"Nacionalitat\":\"espanyola (E)\",\"9\":\"espanyola (E)\",\"LocalitatNaixement\":\"SUECA\",\"10\":\"SUECA\",\"ProvinciaNaixement\":\"alacant\",\"11\":\"alacant\",\"Email\":\"mdeviboi@gmail.com\",\"12\":\"mdeviboi@gmail.com\",\"Telefon\":\"45646546\",\"13\":\"45646546\",\"Comentaris\":\"\",\"14\":\"\",\"passwd_moodle\":\"1234\",\"15\":\"1234\"}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Resposta del tipus d'error donat, si la base de dades dóna un error serà el que mostrarà.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": \"SQLSTATE: ...\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./ajax.js",
    "groupTitle": "llistats"
  },
  {
    "type": "get",
    "url": "/php/index.php/dni/:dni",
    "title": "Usuari per dni",
    "name": "Get_Datos_DNI",
    "group": "matr_cula",
    "description": "<p>Es demanen totes les dades d'un usuari.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dni",
            "description": "<p>DNI del usuari, clau principal.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Nom",
            "description": "<p>Nom del alumne</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Cognoms",
            "description": "<p>Cognoms de l'alumne</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "DNI",
            "description": "<p>DNI de l'alumne</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Telefon",
            "description": "<p>Telèfon de l'alumne</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Sexe",
            "description": "<p>Sexe de l'alumne</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "DataNaixement",
            "description": "<p>Data de Naixement de l'alumne</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "PaisNaixement",
            "description": "<p>País de Naixement de l'alumne</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Nacionalitat",
            "description": "<p>Nacionalitat de l'alumne</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "LocalitatNaixement",
            "description": "<p>Localitat de Naixement de l'alumne</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ProvinciaNaixement",
            "description": "<p>Provincia Naixement de l'alumne</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Direccio",
            "description": "<p>L'adreça de l'alumne</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "CP",
            "description": "<p>Codi Postal</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Poblacio",
            "description": "<p>On viu</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Email",
            "description": "<p>Correu electrònic</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Comentaris",
            "description": "<p>Comentaris sobre alguna specte a tenir en compte</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Optativa1",
            "description": "<p>Optativa per al grup GES, irrelevant si no està matriculat en GES</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Optativa2",
            "description": "<p>Optativa per al grup GES, irrelevant si no està matriculat en GES</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "Validada",
            "description": "<p>Si ha entregat tots els paper o no</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "CursCodi",
            "description": "<p>En quin curs està matriculat</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "Matriculat",
            "description": "<p>Si ha estat acceptat o no.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Camp",
            "description": "<p>Camp del Curs on està matriculat</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n\n  {\"Nom\":\"\\u00c1LFREDO\",\"0\":\"\\u00c1LFREDO\",\"Cognoms\":\"VICENTE BOIX\",\"1\":\"VICENTE BOIX\",\"DNI\":\"73567572W\",\"2\":\"73567572W\",\"Telefon\":\"654722866\",\"3\":\"654722866\",\"Sexe\":\"Home\",\"4\":\"Home\",\"DataNaixement\":\"05\\/07\\/1979\",\"5\":\"05\\/07\\/1979\",\"PaisNaixement\":\"ESPANYA\",\"6\":\"ESPANYA\",\"Nacionalitat\":\"espanyola (E)\",\"7\":\"espanyola (E)\",\"LocalitatNaixement\":\"VAL\\u00c8NCIA\",\"8\":\"VAL\\u00c8NCIA\",\"ProvinciaNaixement\":\"VAL\\u00c8NCIA\",\"9\":\"VAL\\u00c8NCIA\",\"Direccio\":\"TRINQUET VELL 44\",\"10\":\"TRINQUET VELL 44\",\"CP\":\"46410\",\"11\":\"46410\",\"Poblacio\":\"SUECA\",\"12\":\"SUECA\",\"Email\":\"alviboi@gmail.com\",\"13\":\"alviboi@gmail.com\",\"Comentaris\":\"\",\"14\":\"\",\"Optativa1\":\"OIP\",\"15\":\"OIP\",\"Optativa2\":\"TMI\",\"16\":\"TMI\",\"Validada\":\"1\",\"17\":\"1\",\"CursCodi\":\"G21m\",\"18\":\"G21m\",\"Matriculat\":\"0\",\"19\":\"0\",\"Camp\":\"ProgramaBcicleII\",\"20\":\"ProgramaBcicleII\"}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Resposta del tipus d'error donat, si la base de dades dóna un error serà el que mostrarà</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": \"La consulta no té resultats\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./ajax.js",
    "groupTitle": "matr_cula"
  },
  {
    "type": "get",
    "url": "/php/index.php/Cognoms/:Cognoms",
    "title": "Usuari per Cognom",
    "name": "Get_busc_cognom",
    "group": "matr_cula",
    "description": "<p>Es demanen tots els usuaris que tinguen eixe mateix Cognom.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Cognoms",
            "description": "<p>Cognom dels alumnes que tinguen eixe cognom</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "-",
            "description": "<p>Torna un Json amb totes les dades demanades, amb el número d'alumnes que tinguen el cognom cercat.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n\n  {\"Nom\":\"\\u00c1LFREDO\",\"0\":\"\\u00c1LFREDO\",\"Cognoms\":\"VICENTE BOIX\",\"1\":\"VICENTE BOIX\",\"DNI\":\"73567572W\",\"2\":\"73567572W\",\"Telefon\":\"654722866\",\"3\":\"654722866\",\"Sexe\":\"Home\",\"4\":\"Home\",\"DataNaixement\":\"05\\/07\\/1979\",\"5\":\"05\\/07\\/1979\",\"PaisNaixement\":\"ESPANYA\",\"6\":\"ESPANYA\",\"Nacionalitat\":\"espanyola (E)\",\"7\":\"espanyola (E)\",\"LocalitatNaixement\":\"VAL\\u00c8NCIA\",\"8\":\"VAL\\u00c8NCIA\",\"ProvinciaNaixement\":\"VAL\\u00c8NCIA\",\"9\":\"VAL\\u00c8NCIA\",\"Direccio\":\"TRINQUET VELL 44\",\"10\":\"TRINQUET VELL 44\",\"CP\":\"46410\",\"11\":\"46410\",\"Poblacio\":\"SUECA\",\"12\":\"SUECA\",\"Email\":\"alviboi@gmail.com\",\"13\":\"alviboi@gmail.com\",\"Comentaris\":\"\",\"14\":\"\",\"Optativa1\":\"OIP\",\"15\":\"OIP\",\"Optativa2\":\"TMI\",\"16\":\"TMI\",\"Validada\":\"1\",\"17\":\"1\",\"CursCodi\":\"G21m\",\"18\":\"G21m\",\"Matriculat\":\"0\",\"19\":\"0\",\"Camp\":\"ProgramaBcicleII\",\"20\":\"ProgramaBcicleII\"}\n  {\"Nom\":\"\\u00c1LFREDO\",\"0\":\"\\u00c1LFREDO\",\"Cognoms\":\"VICENTE BOIX\",\"1\":\"VICENTE BOIX\",\"DNI\":\"73567571W\",\"2\":\"73567571W\",\"Telefon\":\"654722866\",\"3\":\"654722866\",\"Sexe\":\"Home\",\"4\":\"Home\",\"DataNaixement\":\"05\\/07\\/1979\",\"5\":\"05\\/07\\/1979\",\"PaisNaixement\":\"ESPANYA\",\"6\":\"ESPANYA\",\"Nacionalitat\":\"espanyola (E)\",\"7\":\"espanyola (E)\",\"LocalitatNaixement\":\"VAL\\u00c8NCIA\",\"8\":\"VAL\\u00c8NCIA\",\"ProvinciaNaixement\":\"VAL\\u00c8NCIA\",\"9\":\"VAL\\u00c8NCIA\",\"Direccio\":\"TRINQUET VELL 44\",\"10\":\"TRINQUET VELL 44\",\"CP\":\"46410\",\"11\":\"46410\",\"Poblacio\":\"SUECA\",\"12\":\"SUECA\",\"Email\":\"alviboi@gmail.com\",\"13\":\"alviboi@gmail.com\",\"Comentaris\":\"\",\"14\":\"\",\"Optativa1\":\"OIP\",\"15\":\"OIP\",\"Optativa2\":\"TMI\",\"16\":\"TMI\",\"Validada\":\"1\",\"17\":\"1\",\"CursCodi\":\"G21m\",\"18\":\"G21m\",\"Matriculat\":\"0\",\"19\":\"0\",\"Camp\":\"ProgramaBcicleII\",\"20\":\"ProgramaBcicleII\"}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Resposta del tipus d'error donat, si la base de dades dóna un error serà el que mostrarà</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": \"La consulta no té resultats\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./ajax.js",
    "groupTitle": "matr_cula"
  },
  {
    "type": "get",
    "url": "/php/index.php/ConsultaCursosOfertats",
    "title": "Consulta Cursos Ofertats",
    "name": "Get_busc_cursos",
    "group": "matr_cula",
    "description": "<p>Es demanen tots els cursos ofertats en eixe moment</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "-",
            "description": "<p>Torna un Json amb totes les dades demanades, amb els cursos que estan ofertats en eixe moment.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Codi",
            "description": "<p>Codi del curs</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Curs",
            "description": "<p>Nom complet del curs</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Camp",
            "description": "<p>Camps del curs</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n\n [{\"Codi\":\"AcGSv\",\"0\":\"AcGSv\",\"Curs\":\"Acc\\u00e9s CFGS vesprada\",\"1\":\"Acc\\u00e9s CFGS vesprada\",\"Ofertat\":\"1\",\"2\":\"1\",\"Camp\":\"ProgramaBDCursosPolivalents\",\"3\":\"ProgramaBDCursosPolivalents\"},{\"Codi\":\"AcUNm\",\"0\":\"AcUNm\",\"Curs\":\"Acc\\u00e9s Universitat mat\\u00ed\",\"1\":\"Acc\\u00e9s Universitat mat\\u00ed\",\"Ofertat\":\"1\",\"2\":\"1\",\"Camp\":\"ProgramaBDCursosPolivalents\",\"3\":\"ProgramaBDCursosPolivalents\"},{\"Codi\":\"ALFm\",\"0\":\"ALFm\",\"Curs\":\"ALFA mat\\u00ed\",\"1\":\"ALFA mat\\u00ed\",\"Ofertat\":\"1\",\"2\":\"1\",\"Camp\":\"ProgramaACicleI\",\"3\":\"ProgramaACicleI\"},{\"Codi\":\"ALFv\",\"0\":\"ALFv\",\"Curs\":\"ALFA vesprada\",\"1\":\"ALFA vesprada\",\"Ofertat\":\"1\",\"2\":\"1\",\"Camp\":\"ProgramaACicleI\",\"3\":\"ProgramaACicleI\"},{\"Codi\":\"CA1Angm\",\"0\":\"CA1Angm\",\"Curs\":\"Certificat A1 Angl\\u00e8s mat\\u00ed\",\"1\":\"Certificat A1 Angl\\u00e8s mat\\u00ed\",\"Ofertat\":\"1\",\"2\":\"1\",\"Camp\":\"ProgramaJAnglesBasic\",\"3\":\"ProgramaJAnglesBasic\"},{\"Codi\":\"CA2Angm\",\"0\":\"CA2Angm\",\"Curs\":\"Certificat A2 Angl\\u00e8s mat\\u00ed\",\"1\":\"Certificat A2 Angl\\u00e8s mat\\u00ed\",\"Ofertat\":\"1\",\"2\":\"1\",\"Camp\":\"ProgramaJAnglesBasic\",\"3\":\"ProgramaJAnglesBasic\"},{\"Codi\":\"CB1Angm\",\"0\":\"CB1Angm\",\"Curs\":\"Certificat B1 Angl\\u00e8s mat\\u00ed\",\"1\":\"Certificat B1 Angl\\u00e8s mat\\u00ed\",\"Ofertat\":\"1\",\"2\":\"1\",\"Camp\":\"ProgramaJAnglesBasic\",\"3\":\"ProgramaJAnglesBasic\"},{\"Codi\":\"Elm\",\"0\":\"Elm\",\"Curs\":\"ELEMENTAL mat\\u00ed\",\"1\":\"ELEMENTAL mat\\u00ed\",\"Ofertat\":\"1\",\"2\":\"1\",\"Camp\":\"ProgramaCValenciaJQCV\",\"3\":\"ProgramaCValenciaJQCV\"},{\"Codi\":\"G21m\",\"0\":\"G21m\",\"Curs\":\"GES2.1 mat\\u00ed\",\"1\":\"GES2.1 mat\\u00ed\",\"Ofertat\":\"1\",\"2\":\"1\",\"Camp\":\"ProgramaBcicleII\",\"3\":\"ProgramaBcicleII\"},{\"Codi\":\"G21V\",\"0\":\"G21V\",\"Curs\":\"GES2.1 vesprada\",\"1\":\"GES2.1 vesprada\",\"Ofertat\":\"1\",\"2\":\"1\",\"Camp\":\"ProgramaBcicleII\",\"3\":\"ProgramaBcicleII\"},{\"Codi\":\"G22d\",\"0\":\"G22d\",\"Curs\":\"GES2.2 dist\\u00e0ncia\",\"1\":\"GES2.2 dist\\u00e0ncia\",\"Ofertat\":\"1\",\"2\":\"1\",\"Camp\":\"ProgramaBcicleII\",\"3\":\"ProgramaBcicleII\"},{\"Codi\":\"G22m\",\"0\":\"G22m\",\"Curs\":\"GES2.2 mat\\u00ed\",\"1\":\"GES2.2 mat\\u00ed\",\"Ofertat\":\"1\",\"2\":\"1\",\"Camp\":\"ProgramaBcicleII\",\"3\":\"ProgramaBcicleII\"},{\"Codi\":\"G22v\",\"0\":\"G22v\",\"Curs\":\"GES2.2 vesprada\",\"1\":\"GES2.2 vesprada\",\"Ofertat\":\"1\",\"2\":\"1\",\"Camp\":\"ProgramaBcicleII\",\"3\":\"ProgramaBcicleII\"},{\"Codi\":\"Mim\",\"0\":\"Mim\",\"Curs\":\"MITJ\\u00c0 mat\\u00ed\",\"1\":\"MITJ\\u00c0 mat\\u00ed\",\"Ofertat\":\"1\",\"2\":\"1\",\"Camp\":\"ProgramaCValenciaJQCV\",\"3\":\"ProgramaCValenciaJQCV\"},{\"Codi\":\"Orv\",\"0\":\"Orv\",\"Curs\":\"ORAL vesprada\",\"1\":\"ORAL vesprada\",\"Ofertat\":\"1\",\"2\":\"1\",\"Camp\":\"ProgramaCValenciaJQCV\",\"3\":\"ProgramaCValenciaJQCV\"},{\"Codi\":\"SUPv\",\"0\":\"SUPv\",\"Curs\":\"SUPERIOR vesprada\",\"1\":\"SUPERIOR vesprada\",\"Ofertat\":\"1\",\"2\":\"1\",\"Camp\":\"ProgramaCValenciaJQCV\",\"3\":\"ProgramaCValenciaJQCV\"},{\"Codi\":\"TAL13m\",\"0\":\"TAL13m\",\"Curs\":\"TALLER1.3 mat\\u00ed\",\"1\":\"TALLER1.3 mat\\u00ed\",\"Ofertat\":\"1\",\"2\":\"1\",\"Camp\":\"ProgramaACicleI\",\"3\":\"ProgramaACicleI\"},{\"Codi\":\"TAL13v\",\"0\":\"TAL13v\",\"Curs\":\"TALLER1.3 vesprada\",\"1\":\"TALLER1.3 vesprada\",\"Ofertat\":\"1\",\"2\":\"1\",\"Camp\":\"ProgramaACicleI\",\"3\":\"ProgramaACicleI\"},{\"Codi\":\"TALAngm\",\"0\":\"TALAngm\",\"Curs\":\"Taller angles mat\\u00ed\",\"1\":\"Taller angles mat\\u00ed\",\"Ofertat\":\"1\",\"2\":\"1\",\"Camp\":\"ProgramaJAnglesBasic\",\"3\":\"ProgramaJAnglesBasic\"},{\"Codi\":\"TALAngv\",\"0\":\"TALAngv\",\"Curs\":\"Taller angles vesprada\",\"1\":\"Taller angles vesprada\",\"Ofertat\":\"1\",\"2\":\"1\",\"Camp\":\"ProgramaJAnglesBasic\",\"3\":\"ProgramaJAnglesBasic\"}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Resposta del tipus d'error donat, si la base de dades dóna un error serà el que mostrarà.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": \"SQLSTATE: ...\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./ajax.js",
    "groupTitle": "matr_cula"
  },
  {
    "type": "get",
    "url": "/php/index.php/ConsultaCursosTots",
    "title": "Consulta tots els cursos",
    "name": "Get_busc_cursos_tots",
    "group": "matr_cula",
    "description": "<p>Es demanen tots els cursos ofertats i no ofertats en eixe moment, o siga tots els qui estan donats de alta en la base de dades, i e plena les dades en la pàgina de matrícula.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "-",
            "description": "<p>Torna un Json amb totes les dades demanades, amb els cursos que estan en la base de dades en eixe moment.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Codi",
            "description": "<p>Codi del curs</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Curs",
            "description": "<p>Nom complet del curs</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Camp",
            "description": "<p>Camps del curs</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n\n [{\"Codi\":\"AcGSv\",\"0\":\"AcGSv\",\"Curs\":\"Acc\\u00e9s CFGS vesprada\",\"1\":\"Acc\\u00e9s CFGS vesprada\",\"Ofertat\":\"1\",\"2\":\"1\",\"Camp\":\"ProgramaBDCursosPolivalents\",\"3\":\"ProgramaBDCursosPolivalents\"},{\"Codi\":\"AcUNm\",\"0\":\"AcUNm\",\"Curs\":\"Acc\\u00e9s Universitat mat\\u00ed\",\"1\":\"Acc\\u00e9s Universitat mat\\u00ed\",\"Ofertat\":\"1\",\"2\":\"1\",\"Camp\":\"ProgramaBDCursosPolivalents\",\"3\":\"ProgramaBDCursosPolivalents\"},{\"Codi\":\"ALFm\",\"0\":\"ALFm\",\"Curs\":\"ALFA mat\\u00ed\",\"1\":\"ALFA mat\\u00ed\",\"Ofertat\":\"1\",\"2\":\"1\",\"Camp\":\"ProgramaACicleI\",\"3\":\"ProgramaACicleI\"},{\"Codi\":\"ALFv\",\"0\":\"ALFv\",\"Curs\":\"ALFA vesprada\",\"1\":\"ALFA vesprada\",\"Ofertat\":\"1\",\"2\":\"1\",\"Camp\":\"ProgramaACicleI\",\"3\":\"ProgramaACicleI\"},{\"Codi\":\"CA1Angm\",\"0\":\"CA1Angm\",\"Curs\":\"Certificat A1 Angl\\u00e8s mat\\u00ed\",\"1\":\"Certificat A1 Angl\\u00e8s mat\\u00ed\",\"Ofertat\":\"1\",\"2\":\"1\",\"Camp\":\"ProgramaJAnglesBasic\",\"3\":\"ProgramaJAnglesBasic\"},{\"Codi\":\"CA2Angm\",\"0\":\"CA2Angm\",\"Curs\":\"Certificat A2 Angl\\u00e8s mat\\u00ed\",\"1\":\"Certificat A2 Angl\\u00e8s mat\\u00ed\",\"Ofertat\":\"1\",\"2\":\"1\",\"Camp\":\"ProgramaJAnglesBasic\",\"3\":\"ProgramaJAnglesBasic\"},{\"Codi\":\"CB1Angm\",\"0\":\"CB1Angm\",\"Curs\":\"Certificat B1 Angl\\u00e8s mat\\u00ed\",\"1\":\"Certificat B1 Angl\\u00e8s mat\\u00ed\",\"Ofertat\":\"1\",\"2\":\"1\",\"Camp\":\"ProgramaJAnglesBasic\",\"3\":\"ProgramaJAnglesBasic\"},{\"Codi\":\"Elm\",\"0\":\"Elm\",\"Curs\":\"ELEMENTAL mat\\u00ed\",\"1\":\"ELEMENTAL mat\\u00ed\",\"Ofertat\":\"1\",\"2\":\"1\",\"Camp\":\"ProgramaCValenciaJQCV\",\"3\":\"ProgramaCValenciaJQCV\"},{\"Codi\":\"G21m\",\"0\":\"G21m\",\"Curs\":\"GES2.1 mat\\u00ed\",\"1\":\"GES2.1 mat\\u00ed\",\"Ofertat\":\"1\",\"2\":\"1\",\"Camp\":\"ProgramaBcicleII\",\"3\":\"ProgramaBcicleII\"},{\"Codi\":\"G21V\",\"0\":\"G21V\",\"Curs\":\"GES2.1 vesprada\",\"1\":\"GES2.1 vesprada\",\"Ofertat\":\"1\",\"2\":\"1\",\"Camp\":\"ProgramaBcicleII\",\"3\":\"ProgramaBcicleII\"},{\"Codi\":\"G22d\",\"0\":\"G22d\",\"Curs\":\"GES2.2 dist\\u00e0ncia\",\"1\":\"GES2.2 dist\\u00e0ncia\",\"Ofertat\":\"1\",\"2\":\"1\",\"Camp\":\"ProgramaBcicleII\",\"3\":\"ProgramaBcicleII\"},{\"Codi\":\"G22m\",\"0\":\"G22m\",\"Curs\":\"GES2.2 mat\\u00ed\",\"1\":\"GES2.2 mat\\u00ed\",\"Ofertat\":\"1\",\"2\":\"1\",\"Camp\":\"ProgramaBcicleII\",\"3\":\"ProgramaBcicleII\"},{\"Codi\":\"G22v\",\"0\":\"G22v\",\"Curs\":\"GES2.2 vesprada\",\"1\":\"GES2.2 vesprada\",\"Ofertat\":\"1\",\"2\":\"1\",\"Camp\":\"ProgramaBcicleII\",\"3\":\"ProgramaBcicleII\"},{\"Codi\":\"Mim\",\"0\":\"Mim\",\"Curs\":\"MITJ\\u00c0 mat\\u00ed\",\"1\":\"MITJ\\u00c0 mat\\u00ed\",\"Ofertat\":\"1\",\"2\":\"1\",\"Camp\":\"ProgramaCValenciaJQCV\",\"3\":\"ProgramaCValenciaJQCV\"},{\"Codi\":\"Orv\",\"0\":\"Orv\",\"Curs\":\"ORAL vesprada\",\"1\":\"ORAL vesprada\",\"Ofertat\":\"1\",\"2\":\"1\",\"Camp\":\"ProgramaCValenciaJQCV\",\"3\":\"ProgramaCValenciaJQCV\"},{\"Codi\":\"SUPv\",\"0\":\"SUPv\",\"Curs\":\"SUPERIOR vesprada\",\"1\":\"SUPERIOR vesprada\",\"Ofertat\":\"1\",\"2\":\"1\",\"Camp\":\"ProgramaCValenciaJQCV\",\"3\":\"ProgramaCValenciaJQCV\"},{\"Codi\":\"TAL13m\",\"0\":\"TAL13m\",\"Curs\":\"TALLER1.3 mat\\u00ed\",\"1\":\"TALLER1.3 mat\\u00ed\",\"Ofertat\":\"1\",\"2\":\"1\",\"Camp\":\"ProgramaACicleI\",\"3\":\"ProgramaACicleI\"},{\"Codi\":\"TAL13v\",\"0\":\"TAL13v\",\"Curs\":\"TALLER1.3 vesprada\",\"1\":\"TALLER1.3 vesprada\",\"Ofertat\":\"1\",\"2\":\"1\",\"Camp\":\"ProgramaACicleI\",\"3\":\"ProgramaACicleI\"},{\"Codi\":\"TALAngm\",\"0\":\"TALAngm\",\"Curs\":\"Taller angles mat\\u00ed\",\"1\":\"Taller angles mat\\u00ed\",\"Ofertat\":\"1\",\"2\":\"1\",\"Camp\":\"ProgramaJAnglesBasic\",\"3\":\"ProgramaJAnglesBasic\"},{\"Codi\":\"TALAngv\",\"0\":\"TALAngv\",\"Curs\":\"Taller angles vesprada\",\"1\":\"Taller angles vesprada\",\"Ofertat\":\"1\",\"2\":\"1\",\"Camp\":\"ProgramaJAnglesBasic\",\"3\":\"ProgramaJAnglesBasic\"}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Resposta del tipus d'error donat, si la base de dades dóna un error serà el que mostrarà.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": \"SQLSTATE: ...\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./ajax.js",
    "groupTitle": "matr_cula"
  },
  {
    "type": "post",
    "url": "/php/index.php/actualitza",
    "title": "Actualitza les dades d'un alumne",
    "name": "actualitza_dades",
    "group": "matr_cula",
    "description": "<p>Actualitza les dades d'un alumne a la pàgina de matrícula del professorat. Es lligen tots els camps d'un formulari</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Nom",
            "description": "<p>Nom del alumne</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Cognoms",
            "description": "<p>Cognoms de l'alumne</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "DNI",
            "description": "<p>DNI de l'alumne</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Telefon",
            "description": "<p>Telèfon de l'alumne</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Sexe",
            "description": "<p>Sexe de l'alumne</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "DataNaixement",
            "description": "<p>Data de Naixement de l'alumne</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "PaisNaixement",
            "description": "<p>País de Naixement de l'alumne</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Nacionalitat",
            "description": "<p>Nacionalitat de l'alumne</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "LocalitatNaixement",
            "description": "<p>Localitat de Naixement de l'alumne</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ProvinciaNaixement",
            "description": "<p>Provincia Naixement de l'alumne</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Direccio",
            "description": "<p>L'adreça de l'alumne</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "CP",
            "description": "<p>Codi Postal</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Poblacio",
            "description": "<p>On viu</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Email",
            "description": "<p>Correu electrònic</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Comentaris",
            "description": "<p>Comentaris sobre alguna specte a tenir en compte</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Optativa1",
            "description": "<p>Optativa per al grup GES, irrelevant si no està matriculat en GES</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Optativa2",
            "description": "<p>Optativa per al grup GES, irrelevant si no està matriculat en GES</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "Validada",
            "description": "<p>Si ha entregat tots els paper o no</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "CursCodi",
            "description": "<p>En quin curs està matriculat</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "Matriculat",
            "description": "<p>Si ha estat acceptat o no.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Camp",
            "description": "<p>Camp del Curs on està matriculat</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "0",
            "description": "<p>Desat correctament</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n[{\"0\":\"Desat Correctament\"}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Resposta del tipus d'error donat, si la base de dades dóna un error serà el que mostrarà.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": \"SQLSTATE: ...\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./ajax.js",
    "groupTitle": "matr_cula"
  },
  {
    "type": "post",
    "url": "/php/index.php/actualitza",
    "title": "Actualitza les dades d'un alumne de curs anterior",
    "name": "actualitza_dades2",
    "group": "matr_cula",
    "description": "<p>Actualitza les dades d'un alumne a la pàgina de matrícula de l'alumne. Auesta opció només estarà present si és un alumne d'anys anteriors i recupera les seues dades. Es lligen tots els camps d'un formulari.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Nom",
            "description": "<p>Nom del alumne</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Cognoms",
            "description": "<p>Cognoms de l'alumne</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "DNI",
            "description": "<p>DNI de l'alumne</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Telefon",
            "description": "<p>Telèfon de l'alumne</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Sexe",
            "description": "<p>Sexe de l'alumne</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "DataNaixement",
            "description": "<p>Data de Naixement de l'alumne</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "PaisNaixement",
            "description": "<p>País de Naixement de l'alumne</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Nacionalitat",
            "description": "<p>Nacionalitat de l'alumne</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "LocalitatNaixement",
            "description": "<p>Localitat de Naixement de l'alumne</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ProvinciaNaixement",
            "description": "<p>Provincia Naixement de l'alumne</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Direccio",
            "description": "<p>L'adreça de l'alumne</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "CP",
            "description": "<p>Codi Postal</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Poblacio",
            "description": "<p>On viu</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Email",
            "description": "<p>Correu electrònic</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Comentaris",
            "description": "<p>Comentaris sobre alguna specte a tenir en compte</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Optativa1",
            "description": "<p>Optativa per al grup GES, irrelevant si no està matriculat en GES</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Optativa2",
            "description": "<p>Optativa per al grup GES, irrelevant si no està matriculat en GES</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "Validada",
            "description": "<p>Si ha entregat tots els paper o no</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "CursCodi",
            "description": "<p>En quin curs està matriculat</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "Matriculat",
            "description": "<p>Si ha estat acceptat o no.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Camp",
            "description": "<p>Camp del Curs on està matriculat</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "0",
            "description": "<p>Desat correctament</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n[{\"0\":\"Desat Correctament\"}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Resposta del tipus d'error donat, si la base de dades dóna un error serà el que mostrarà.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": \"SQLSTATE: ...\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./ajax.js",
    "groupTitle": "matr_cula"
  },
  {
    "type": "post",
    "url": "/php/index.php/login_alumne_antic",
    "title": "Login alumnes antics",
    "name": "alumne_antic_passwd",
    "group": "matr_cula",
    "description": "<p>Per a alumnes que ja han estat matriculats en altres anys, poden recuperar les seues dades amb la seua contrasenya de moodle.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "DNI",
            "description": "<p>DNI de l'estudiant.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "moodle",
            "description": "<p>Contrasenya del moodle assignada en la seua matrícula.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "-",
            "description": "<p>Torna un Json amb totes les dades demanades, amb els cursos que estan en la base de dades en eixe moment.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Nom",
            "description": "<p>Nom del alumne</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Cognoms",
            "description": "<p>Cognoms de l'alumne</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "DNI",
            "description": "<p>DNI de l'alumne</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Telefon",
            "description": "<p>Telèfon de l'alumne</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Sexe",
            "description": "<p>Sexe de l'alumne</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "DataNaixement",
            "description": "<p>Data de Naixement de l'alumne</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "PaisNaixement",
            "description": "<p>País de Naixement de l'alumne</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Nacionalitat",
            "description": "<p>Nacionalitat de l'alumne</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "LocalitatNaixement",
            "description": "<p>Localitat de Naixement de l'alumne</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ProvinciaNaixement",
            "description": "<p>Provincia Naixement de l'alumne</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Direccio",
            "description": "<p>L'adreça de l'alumne</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "CP",
            "description": "<p>Codi Postal</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Poblacio",
            "description": "<p>On viu</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Email",
            "description": "<p>Correu electrònic</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Comentaris",
            "description": "<p>Comentaris sobre alguna specte a tenir en compte</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Optativa1",
            "description": "<p>Optativa per al grup GES, irrelevant si no estàmatriuculat en GES</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Optativa2",
            "description": "<p>Optativa per al grup GES, irrelevant si no estàmatriuculat en GES</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "Validada",
            "description": "<p>Si ha entregat tots els paper o no</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "CursCodi",
            "description": "<p>En quin curs està matriculat</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "Matriculat",
            "description": "<p>Si ha estat acceptat o no.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Camp",
            "description": "<p>Camp del Curs on està matriculat</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n\n  {\"Nom\":\"\\u00c1LFREDO\",\"0\":\"\\u00c1LFREDO\",\"Cognoms\":\"VICENTE BOIX\",\"1\":\"VICENTE BOIX\",\"DNI\":\"73567572W\",\"2\":\"73567572W\",\"Telefon\":\"654722866\",\"3\":\"654722866\",\"Sexe\":\"Home\",\"4\":\"Home\",\"DataNaixement\":\"05\\/07\\/1979\",\"5\":\"05\\/07\\/1979\",\"PaisNaixement\":\"ESPANYA\",\"6\":\"ESPANYA\",\"Nacionalitat\":\"espanyola (E)\",\"7\":\"espanyola (E)\",\"LocalitatNaixement\":\"VAL\\u00c8NCIA\",\"8\":\"VAL\\u00c8NCIA\",\"ProvinciaNaixement\":\"VAL\\u00c8NCIA\",\"9\":\"VAL\\u00c8NCIA\",\"Direccio\":\"TRINQUET VELL 44\",\"10\":\"TRINQUET VELL 44\",\"CP\":\"46410\",\"11\":\"46410\",\"Poblacio\":\"SUECA\",\"12\":\"SUECA\",\"Email\":\"alviboi@gmail.com\",\"13\":\"alviboi@gmail.com\",\"Comentaris\":\"\",\"14\":\"\",\"Optativa1\":\"OIP\",\"15\":\"OIP\",\"Optativa2\":\"TMI\",\"16\":\"TMI\",\"Validada\":\"1\",\"17\":\"1\",\"CursCodi\":\"G21m\",\"18\":\"G21m\",\"Matriculat\":\"0\",\"19\":\"0\",\"Camp\":\"ProgramaBcicleII\",\"20\":\"ProgramaBcicleII\"}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Si el login no és correcte, donarà el motiu de perquè.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": \"El nom o la contrasenya no són correctes\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./matricula.js",
    "groupTitle": "matr_cula"
  },
  {
    "type": "get",
    "url": "/php/index.php/any_actual",
    "title": "Any actual",
    "name": "any_actual",
    "group": "matr_cula",
    "description": "<p>Per saber en quin any està gestionant la base de dades.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "AnyActual",
            "description": "<p>Any més elevat de la base de dades</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Resposta del tipus d'error donat, si la base de dades dóna un error serà el que mostrarà.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": \"SQLSTATE: ...\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./ajax.js",
    "groupTitle": "matr_cula"
  },
  {
    "type": "post",
    "url": "/php/index.php/esborra_alumne",
    "title": "Esborra alumne",
    "name": "esborra_alumne",
    "group": "matr_cula",
    "description": "<p>El professor pot esborrar un alumne des de la pàgina de gesrtió de matrícula.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "DNI",
            "description": "<p>DNI de l'alumne</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Resposta del tipus d'error donat, si la base de dades dóna un error serà el que mostrarà.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": \"SQLSTATE: ...\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./ajax.js",
    "groupTitle": "matr_cula"
  },
  {
    "type": "get",
    "url": "/php/index.php/pdf/:dni",
    "title": "Genera full matricula per professor",
    "name": "full_matricula_alumne",
    "group": "matr_cula",
    "description": "<p>El professor crea un pdf del ful de matrícula.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "DNI",
            "description": "<p>DNI de l'alumne</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "pdf",
            "optional": false,
            "field": "pdf",
            "description": "<p>Document pdf del full de matrícula</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Gestionat per la llibreria fpdf</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./ajax.js",
    "groupTitle": "matr_cula"
  },
  {
    "type": "get",
    "url": "/php/index.php/dni_antic/:dni",
    "title": "Usuari de curs anterior per dni",
    "name": "importa_alumne",
    "group": "matr_cula",
    "description": "<p>Es demanen totes les dades d'un alumne d'anys anteriors. En la mateixa funció es buiden les dades de matrícula de l'any anterior.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dni",
            "description": "<p>DNI del usuari, clau principal.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Nom",
            "description": "<p>Nom del alumne</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Cognoms",
            "description": "<p>Cognoms de l'alumne</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "DNI",
            "description": "<p>DNI de l'alumne</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Telefon",
            "description": "<p>Telèfon de l'alumne</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Sexe",
            "description": "<p>Sexe de l'alumne</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "DataNaixement",
            "description": "<p>Data de Naixement de l'alumne</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "PaisNaixement",
            "description": "<p>País de Naixement de l'alumne</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Nacionalitat",
            "description": "<p>Nacionalitat de l'alumne</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "LocalitatNaixement",
            "description": "<p>Localitat de Naixement de l'alumne</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ProvinciaNaixement",
            "description": "<p>Provincia Naixement de l'alumne</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Direccio",
            "description": "<p>L'adreça de l'alumne</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "CP",
            "description": "<p>Codi Postal</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Poblacio",
            "description": "<p>On viu</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Email",
            "description": "<p>Correu electrònic</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Comentaris",
            "description": "<p>Comentaris sobre alguna specte a tenir en compte</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Optativa1",
            "description": "<p>Optativa per al grup GES, irrelevant si no està matriculat en GES</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Optativa2",
            "description": "<p>Optativa per al grup GES, irrelevant si no està matriculat en GES</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "Validada",
            "description": "<p>Si ha entregat tots els paper o no</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "CursCodi",
            "description": "<p>En quin curs està matriculat</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "Matriculat",
            "description": "<p>Si ha estat acceptat o no.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Camp",
            "description": "<p>Camp del Curs on està matriculat</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n\n  {\"Nom\":\"\\u00c1LFREDO\",\"0\":\"\\u00c1LFREDO\",\"Cognoms\":\"VICENTE BOIX\",\"1\":\"VICENTE BOIX\",\"DNI\":\"73567572W\",\"2\":\"73567572W\",\"Telefon\":\"654722866\",\"3\":\"654722866\",\"Sexe\":\"Home\",\"4\":\"Home\",\"DataNaixement\":\"05\\/07\\/1979\",\"5\":\"05\\/07\\/1979\",\"PaisNaixement\":\"ESPANYA\",\"6\":\"ESPANYA\",\"Nacionalitat\":\"espanyola (E)\",\"7\":\"espanyola (E)\",\"LocalitatNaixement\":\"VAL\\u00c8NCIA\",\"8\":\"VAL\\u00c8NCIA\",\"ProvinciaNaixement\":\"VAL\\u00c8NCIA\",\"9\":\"VAL\\u00c8NCIA\",\"Direccio\":\"TRINQUET VELL 44\",\"10\":\"TRINQUET VELL 44\",\"CP\":\"46410\",\"11\":\"46410\",\"Poblacio\":\"SUECA\",\"12\":\"SUECA\",\"Email\":\"alviboi@gmail.com\",\"13\":\"alviboi@gmail.com\",\"Comentaris\":\"\",\"14\":\"\",\"Optativa1\":\"OIP\",\"15\":\"OIP\",\"Optativa2\":\"TMI\",\"16\":\"TMI\",\"Validada\":\"1\",\"17\":\"1\",\"CursCodi\":\"G21m\",\"18\":\"G21m\",\"Matriculat\":\"0\",\"19\":\"0\",\"Camp\":\"ProgramaBcicleII\",\"20\":\"ProgramaBcicleII\"}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Resposta del tipus d'error donat, si la base de dades dóna un error serà el que mostrarà</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": \"La consulta no té resultats\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./ajax.js",
    "groupTitle": "matr_cula"
  },
  {
    "type": "post",
    "url": "/php/index.php/inscriu",
    "title": "Inscriu un alumne",
    "name": "inscriu_alumne",
    "group": "matr_cula",
    "description": "<p>Inscriu a un alumne que s'acaba de matricular a la pàgina de matrícula. Aquesta funció també obrirà una pestanya i generarà un pdf amb el full de matrícula.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Nom",
            "description": "<p>Nom del alumne</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Cognoms",
            "description": "<p>Cognoms de l'alumne</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "DNI",
            "description": "<p>DNI de l'alumne</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Telefon",
            "description": "<p>Telèfon de l'alumne</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Sexe",
            "description": "<p>Sexe de l'alumne</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "DataNaixement",
            "description": "<p>Data de Naixement de l'alumne</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "PaisNaixement",
            "description": "<p>País de Naixement de l'alumne</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Nacionalitat",
            "description": "<p>Nacionalitat de l'alumne</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "LocalitatNaixement",
            "description": "<p>Localitat de Naixement de l'alumne</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ProvinciaNaixement",
            "description": "<p>Provincia Naixement de l'alumne</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Direccio",
            "description": "<p>L'adreça de l'alumne</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "CP",
            "description": "<p>Codi Postal</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Poblacio",
            "description": "<p>On viu</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Email",
            "description": "<p>Correu electrònic</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Comentaris",
            "description": "<p>Comentaris sobre alguna specte a tenir en compte</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Optativa1",
            "description": "<p>Optativa per al grup GES, irrelevant si no està matriculat en GES</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Optativa2",
            "description": "<p>Optativa per al grup GES, irrelevant si no està matriculat en GES</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "Validada",
            "description": "<p>Si ha entregat tots els paper o no</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "CursCodi",
            "description": "<p>En quin curs està matriculat</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "Matriculat",
            "description": "<p>Si ha estat acceptat o no.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Camp",
            "description": "<p>Camp del Curs on està matriculat</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Resposta del tipus d'error donat, si la base de dades dóna un error serà el que mostrarà.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": \"SQLSTATE: ...\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./ajax.js",
    "groupTitle": "matr_cula"
  },
  {
    "type": "get",
    "url": "/php/index.php/pdf/:dni",
    "title": "Genera full matricula",
    "name": "inscriu_pdf",
    "group": "matr_cula",
    "description": "<p>Crea un pdf amb les dades acabades d'introduir per l'alumne.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "DNI",
            "description": "<p>DNI de l'alumne</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "pdf",
            "optional": false,
            "field": "pdf",
            "description": "<p>Document pdf del full de matrícula</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Gestionat per la llibreria fpdf</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./ajax.js",
    "groupTitle": "matr_cula"
  },
  {
    "type": "post",
    "url": "/php/index.php/genera_any_nou",
    "title": "Genera Any",
    "name": "inserta_nou_any",
    "group": "matr_cula",
    "description": "<p>Per començar un nou procés de matrícula.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "AnyActual",
            "description": "<p>Any actual</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "0",
            "description": "<p>&quot;Any &quot;.$any_nou.&quot; creat correctament&quot;</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Resposta del tipus d'error donat, si la base de dades dóna un error serà el que mostrarà.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": \"SQLSTATE: ...\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./ajax.js",
    "groupTitle": "matr_cula"
  },
  {
    "type": "post",
    "url": "/php/matricula_any_anterior",
    "title": "Matricula alumnes del curs anterior",
    "name": "matricula_any_anterior",
    "group": "matr_cula",
    "description": "<p>Matricula a tots els alumnes de l'any anterior que pasen de curs per exemple en un nou curs.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "Matriculat",
            "description": "<p>Array amb tots els DNIs dels ususaris que es matriculen.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "curs",
            "description": "<p>Codi del curs on es van a matricular el present any.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "0",
            "description": "<p>&quot;Matriculat correctament&quot;</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Resposta del tipus d'error donat, si la base de dades dóna un error serà el que mostrarà</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./ajax.js",
    "groupTitle": "matr_cula"
  }
] });
