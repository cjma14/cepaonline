<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://cepaonline.cl/">
    <img src="https://raw.githubusercontent.com/cjma14/cepaonline/refs/heads/master/src/images/icon.png" alt="Logo" width="80">
  </a>

  <h3 align="center">Cepa Online</h3>
</div>

<!-- ABOUT THE PROJECT -->
## Sobre este proyecto
### Landing page optimizada y escalable

Página web creada para la institución CEPA.

### Diseño modular y escalable

La arquitectura de la landing page se basa en componentes modulares y reutilizables, lo que facilita su mantenimiento y escalabilidad a medida que el proyecto crezca.

### Metodología BEM para el CSS

Se ha utilizado la metodología BEM para nombrar las clases CSS, lo que ayuda a mantener el código organizado y legible.
<br/>
[![Product Name Screen Shot][product-screenshot]](https://github.com/cjma14/landing-test-react/blob/master/public/assets/capture.png)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Contruido con:

* [![Astro][Astro.js]][https://docs.astro.build]
* [Astro DB](https://docs.astro.build/en/guides/astro-db)
* [Auth astro](https://docs.astro.build/en/guides/authentication/)
* [Drizzle](https://orm.drizzle.team/)
* [Preline](https://preline.co/)
* [Tailwind CSS](https://tailwindcss.com/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## ¡Comencemos!
¡Bienvenido a tu nueva landing page hecha en React con Vite!

Aquí encontrarás todo lo que necesitas para empezar a trabajar en tu proyecto:

Requisitos:

    Node.js >= 22.7.0
    npm >= 10.8.2

### Instalación y Uso
Primero empezaremos con la instalaciónd e dependencias:
  ```sh
  npm install
  ```
Configuración de .env
```sh
    ASTRO_DB_APP_TOKEN=[Token de base de datos de producción (turso.tech o similares)]
    ASTRO_DB_REMOTE_URL=[URL de base de datos de producción (turso.tech o similares)]

    GOOGLE_CLIENT_ID=[ID OAuth para utentificación OAuth]
    GOOGLE_CLIENT_SECRET=[Secret OAuth para utentificación OAuth]

    AUTH_SECRET=[Clave dinámica irrepetible puede generar el siguiente link https://generate-secret.vercel.app/32]
    AUTH_TRUST_HOST=true
  ```
Luego pasaremos a iniciar el servidor local de vite:
  ```sh
  npm run dev
  ```
Para su compulación y subida producción simplmente haremos:
  ```sh
  npm run build
 ```

 Adicional en caso de realizar cambios a la base de datos se tiene que hacer push de los cambios a producción
  ```sh
  npm run astro db push --remote
 ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

Correo: cmja.27@gmail.com

<p align="right">(<a href="#readme-top">back to top</a>)</p>

[product-screenshot]: https://github.com/cjma14/landing-test-react/blob/master/public/assets/capture.png
[React-url]: https://reactjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAF
## API Reference

#### Get all items

```http
  GET /api/items
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### add(num1, num2)

Takes two numbers and returns the sum.


## Other Common Github Profile Sections
👩‍💻 I'm currently working on...

🧠 I'm currently learning...

👯‍♀️ I'm looking to collaborate on...

🤔 I'm looking for help with...

💬 Ask me about...

📫 How to reach me...

😄 Pronouns...

⚡️ Fun fact...

