# TALLER DE DE MODULARIZACIÓN CON VIRTUALIZACIÓN E INTRODUCCIÓN A DOCKER Y A AWS

Creación de una aplicación web pequeña usando el micro-framework de Spark java (http://sparkjava.com/). 
Una vez tengamos esta aplicación procederemos a construir un container para docker para la aplicación y los 
desplegaremos y configuraremos en nuestra máquina local. Luego, cerremos un repositorio en DockerHub y subiremos la imagen al repositorio. 
Finalmente, crearemos una máquina virtual de en AWS, instalaremos Docker , y desplegaremos el contenedor que acabamos de crear.

**** 
## Empezando

### 🛠️ Abre y ejecuta el proyecto

**1. Para empezar se clona el repositorio colocando el siguiente comando**

```
git clone https://github.com/carol695/Taller4-AREP.git
```
**2. Ya clonado el repositorio abrimos el laboratorio utilizando cualquier de los siguientes IDE.**

* Intellij.
* eclipse.
* visual Studio code. 

**3. Luego de abrir el laboratorio, corremos el proyecto. Para este caso colocaremos lo siguiente:**

```
git clean package exec:java -D"exec.mainClass"="edu.escuelaing.arem.app.WebApss.FirstApp"
```

### :newspaper: Diseño 

La aplicación inicial llamada RoundRobin va a recibir las los logs por parte del usuario, 
esta estará montada en una instancia de EC2 que posteriormente será conectada a un LoadBalancer el cual conectara 
3 imagenes docker corriendo por distintos puertos y guardara los logs en la base de datos MongoDB.

#### Arquitectura 

![image](https://user-images.githubusercontent.com/63822072/223749189-975c1c01-1a46-4ddf-a5b5-281a7d0f2379.png)

### :bulb: Construcción 

1. Se crea una cuenta en MongoDB 

![image](https://user-images.githubusercontent.com/63822072/223749607-30bd361b-60cf-4199-9d03-f5620682e5e9.png)

2. Se crea un proyecto con las siguientes clases: 

![image](https://user-images.githubusercontent.com/63822072/223749725-de86db2f-866b-424f-aa1c-647c3efd98a9.png)

3. Se configura el pom y se genera las diferentes dependencias en .target 

4. Al correr se verá así: 

![image](https://user-images.githubusercontent.com/63822072/223749992-68518269-cbcd-4aa7-ba16-b084166c7346.png)

#### Creación de contenedores

5. Se genera el siguiente archivo **Dockerfile**

![image](https://user-images.githubusercontent.com/63822072/223750485-62a98761-f2a0-4db6-8aaa-977cee631863.png)

6. Creación de la imagen de docker 

![image](https://user-images.githubusercontent.com/63822072/223751030-c44e565c-a465-4fe4-b2d4-25049e2a3e25.png)

7. Luego de crear tres instancias de un contenedor docker, nos aseguramos que esta corriendo 

![image](https://user-images.githubusercontent.com/63822072/223752348-17fad939-3899-493c-8f9a-4b8dcb849850.png)

![image](https://user-images.githubusercontent.com/63822072/223752502-721f0435-da96-4a68-8193-195ad96c069b.png)

8. Creamos un archivo llamado docker-compose.yml

![image](https://user-images.githubusercontent.com/63822072/223752994-dbe5c97d-16c2-48ad-b42e-e10ff3d53919.png)

9. Al ejecutarse docker-compose up -d se mira así:

![image](https://user-images.githubusercontent.com/63822072/223753554-4e965d23-e3db-4e36-baa1-fb73dcab08b2.png)

![image](https://user-images.githubusercontent.com/63822072/223754269-6877f5cf-06f7-46be-b090-8b7e3c8fb99b.png)

#### Creación de servicios 

10. Al ejecutar docker ps, se verá así: 

![image](https://user-images.githubusercontent.com/63822072/223755418-645a1a57-3bbd-43c5-86a8-d91a1c86cc76.png)

### Creación de repositorio y cargar imagenes a DockerHub


