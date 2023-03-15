# TALLER DE DE MODULARIZACIÓN CON VIRTUALIZACIÓN E INTRODUCCIÓN A DOCKER Y A AWS

Creación de una aplicación web pequeña usando el micro-framework de Spark java (http://sparkjava.com/). 
Una vez tengamos esta aplicación procederemos a construir una aplicación con la arquitectura propuesta y desplegarla en AWS usando EC2, ELB y autoescalado.

1. El servicio MongoDB es una instancia de MongoDB corriendo en una máquina virtual de EC2

2. LogService es un servicio REST que recibe una cadena, la almacena en la base de datos y responde en un objeto JSON con las 10 ultimas cadenas almacenadas en la base de datos y la fecha en que fueron almacenadas.

3. La aplicación web APP-LB-RoundRobin está compuesta por un cliente web y al menos un servicio REST. El cliente web tiene un campo y un botón y cada vez que el usuario envía un mensaje, este se lo envía al servicio REST y actualiza la pantalla con la información que este le regresa en formato JSON. El servicio REST recibe la cadena e implementa un algoritmo de balanceo de cargas de Round Robin, delegando el procesamiento del mensaje y el retorno de la respuesta a cada una de las tres instancias del servicio LogService.


**** 
## Empezando

### :newspaper: Diseño 

Aplicación que recibe una cadena cualquiera, esta es recibida y es guardada en una base de datos Mongo, esta acción puede ser realizada por 3 instancias diferentes, presentes en los puertos 34000, 34001 y 34002. Una vez esta es recibida se muestra un json con las ultimas 10 cadenas enviadas junto con la fecha y hora en que se enviaron.

### :mag_right: Arquitectura 

![image](https://user-images.githubusercontent.com/63822072/225338566-0b6245a8-b201-4dfc-b7f9-3394ddc69361.png)

****

### :bulb: Construcción 

#### Creación de instancias 

![image](https://user-images.githubusercontent.com/63822072/225340109-60358644-f867-43cd-9435-f3959775ab91.png)

### Uso del proyecto antes creado

![image](https://user-images.githubusercontent.com/63822072/225341094-fe0cab4e-0922-4682-a72b-768156d91da7.png)

### Instalacion de java en las instancias de logService y roundRobin e intalación de mongoDB

#### logService1

![image](https://user-images.githubusercontent.com/63822072/225344262-ae239a98-6152-4154-8814-63af3874c32c.png)

#### logService2

![image](https://user-images.githubusercontent.com/63822072/225344304-f589ed16-fffc-4328-a36d-f1d4c0acb54a.png)

#### logService3

![image](https://user-images.githubusercontent.com/63822072/225344345-d440a6b9-249d-4abc-a469-959727b873f4.png)

#### roundRobin

![image](https://user-images.githubusercontent.com/63822072/225344385-8e49640f-2a55-4af4-81ae-758b0e5269b9.png)

#### mongoDB

Ahora implementaremos el servidor de mongo db.

Para esto abrimos una consola de la instancia de mongo localmente y por medio de vi creamos el siguiente archivo:

```
vi /etc/yum.repos.d/mongodb-org-6.0.repo

```
le agregamos la siguiente información:

```
[mongodb-org-6.0]
name=MongoDB Repository
baseurl=https://repo.mongodb.org/yum/amazon/2/mongodb-org/6.0/x86_64/
gpgcheck=1
enabled=1
gpgkey=https://www.mongodb.org/static/pgp/server-6.0.asc

```
Ahora debemos decirle a mongo que acepte cualquier ip para consultar la basen de datos.

Entramos al archivo mongod.conf con el siguiente comando:

```
/etc/mongod.conf

```
Y cambios la seccion bindIP.

![image](https://user-images.githubusercontent.com/63822072/225344601-4ef5a2a5-4f6c-4fdf-b8fe-5d4bd3edc7f6.png)

![image](https://user-images.githubusercontent.com/63822072/225345354-47bdea6c-7a0d-49f8-a60f-07008ce562b4.png)

Comenzar mongo y ver el estado 

![image](https://user-images.githubusercontent.com/63822072/225345449-1f656077-ead4-4f13-8d7c-baa35106d42a.png)

### target.zip en las instancias excepto en la de mongoDB 

#### logService1

![image](https://user-images.githubusercontent.com/63822072/225345889-b1524955-d6a6-4b4a-bb39-621801ced775.png)

#### logService2

![image](https://user-images.githubusercontent.com/63822072/225345963-49fab203-2991-4b93-9148-b3705ee9c34c.png)

#### logService3

![image](https://user-images.githubusercontent.com/63822072/225346000-e317de4b-a7b2-4ce4-b393-baa213be19f9.png)

#### roundRobin

![image](https://user-images.githubusercontent.com/63822072/225346051-328bf954-1988-40f9-b93e-ec3657f32011.png)

### Abrir puertos 

En cada uno de los grupos de seguridad se abren los puertos 4567 y 4566 y en la de mongo se abre el Puerto 27017

![image](https://user-images.githubusercontent.com/63822072/225346171-1b9d9505-f677-4c08-a830-837efa5643fa.png)

### Ejecución

#### RoundRobin

![image](https://user-images.githubusercontent.com/63822072/225346351-14771753-00d0-41b6-9673-a5b84968ef79.png)

#### logService

![image](https://user-images.githubusercontent.com/63822072/225346376-ac4ea121-5dc2-47fe-b913-4615e9350ca3.png)

### Pruebas

![image](https://user-images.githubusercontent.com/63822072/225348271-f9abdec4-274f-476c-a728-504abae565c6.png)

****
### :chart_with_downwards_trend: Prerrequisitos

-   [Git](https://git-scm.com/downloads) - Sistema de control de versiones
-   [Maven](https://maven.apache.org/download.cgi) - Gestor de dependencias
-   [Java 8](https://www.java.com/download/ie_manual.jsp) - Entorno de desarrollo
-   [Intellij Idea](https://www.jetbrains.com/es-es/idea/download/) (Opcional)

****

### :bulb: Construido con

* [Maven](https://maven.apache.org/) - Dependency Management
* [AWS](https://aws.amazon.com/) - Instancia EC2

## :mag_right: Versionamiento

Para definir el versionamiento se pudo obserar los tags del repositorio, y el versionaiento es 1.0 

## :woman: Actores

* **Carol Tatiana Cely Rodriguez** 



