(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{204:function(e,t,a){"use strict";a.r(t);var r=a(0),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"getting-started"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[e._v("#")]),e._v(" Getting Started")]),e._v(" "),a("p",[e._v("Dans cet atelier, vous allez mettre en place "),a("a",{attrs:{href:"https://www.testcontainers.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Testcontainers"),a("OutboundLink")],1),e._v(" pour migrer les tests d'intégrations d'une application "),a("a",{attrs:{href:"https://spring.io/projects/spring-boot",target:"_blank",rel:"noopener noreferrer"}},[e._v("Spring Boot"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("Il s'agit de l'application "),a("a",{attrs:{href:"https://github.com/spring-projects/spring-petclinic",target:"_blank",rel:"noopener noreferrer"}},[e._v("Spring Petclinic"),a("OutboundLink")],1),e._v(", une application de démonstration utilisée pour montrer des cas d'exemples de certains composants de l'écosystème Spring.\nOn y trouve par exemple "),a("a",{attrs:{href:"https://www.baeldung.com/spring-boot-actuators",target:"_blank",rel:"noopener noreferrer"}},[e._v("Spring Boot Actuator"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://docs.spring.io/spring-data/jpa/docs/current/reference/html/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Spring Data JPA"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://docs.spring.io/spring/docs/current/spring-framework-reference/web.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Spring Web"),a("OutboundLink")],1),e._v(" et "),a("a",{attrs:{href:"https://spring.io/guides/gs/caching/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Spring Cache"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"recuperation-du-projet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#recuperation-du-projet"}},[e._v("#")]),e._v(" Récupération du projet")]),e._v(" "),a("p",[e._v("Pour bien démarrer, assurez-vous d'avoir les outils suivant d'installés :")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://git-scm.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Git"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.java.com/fr/download/",target:"_blank",rel:"noopener noreferrer"}},[e._v("JDK 8 ou supérieur"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://maven.apache.org/download.cgi",target:"_blank",rel:"noopener noreferrer"}},[e._v("Maven"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.docker.com/get-started",target:"_blank",rel:"noopener noreferrer"}},[e._v("docker"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("Votre IDE préféré")])]),e._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",[e._v("Pensez à vérifier que votre utilisateur courant appartient au group "),a("code",[e._v("docker")])])]),e._v(" "),a("p",[e._v("Ensuite téléchargez le projet depuis github :")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/vgallet/handson-testcontainers.git\n")])])]),a("h2",{attrs:{id:"lancement-du-projet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lancement-du-projet"}},[e._v("#")]),e._v(" Lancement du projet")]),e._v(" "),a("p",[e._v("Ouvrez le projet dans votre IDE et assurez-vous que celui-ci build :")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("mvn clean package\n")])])]),a("div",{staticClass:"tip custom-block"},[a("p",[e._v("Le projet utilise du CSS compilé depuis des fichiers Less. Si le CSS de l'application ne s'affiche pas correctement. Recompiler le CSS avec la commande :")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("mvn generate-resources\n")])])])]),e._v(" "),a("p",[e._v("Vous pouvez ensuite démarrer l'application en lançant le "),a("code",[e._v("main")]),e._v(" de la classe "),a("code",[e._v("PetClinicApplication.java")]),e._v(" où en démarrant directement le jar crée précédemment.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("java -jar target/spring-petclinic-2.1.0.BUILD-SNAPSHOT.jar\n")])])]),a("p",[e._v("Une fois l'application démarrée, rendez-vous ensuite sur la page "),a("a",{attrs:{href:"http://localhost:8080",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://localhost:8080"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("À noter que l'application démarre en utilisant une base chargée en mémoire de type "),a("a",{attrs:{href:"https://fr.wikipedia.org/wiki/HSQLDB",target:"_blank",rel:"noopener noreferrer"}},[e._v("HSQLDB"),a("OutboundLink")],1),e._v(".\nLa configuration de la base de données de l'application se trouve dans le fichier "),a("code",[e._v("src/main/resources/application.properties")]),e._v(".")]),e._v(" "),a("div",{staticClass:"language-properties extra-class"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# database init, supports Mysql too")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("database")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[e._v("hsqldb")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("spring.datasource.schema")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[e._v("classpath*:db/${database}/schema.sql")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("spring.datasource.data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[e._v("classpath*:db/${database}/data.sql")]),e._v("\n")])])]),a("p",[e._v("Ce type de base données est généralement utilisée pour les tests automatisés du fait de sa taille, de sa vitesse et de sa capacité à être montée en mémoire.")])])}),[],!1,null,null,null);t.default=s.exports}}]);