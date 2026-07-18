document.addEventListener("DOMContentLoaded", async () => {

    async function loadComponent(id, file) {

        try {

            const response = await fetch(file);

            if (!response.ok) {
                throw new Error(`Gagal memuat ${file}`);
            }

            document.getElementById(id).innerHTML = await response.text();

        } catch (error) {

            console.error(error);

        }

    }


    // Memanggil komponen halaman
    await loadComponent("header", "header.html");

    await loadComponent("budidayapadi", "budidayapadi.html");

    await loadComponent("budidayacabe", "budidayacabe.html");

    await loadComponent("calculator", "calculator.html");

    await loadComponent("contact", "contact.html");

    await loadComponent("pemupukan", "pemupukan.html");

    await loadComponent("pemupukancabe", "pemupukan.html");

    await loadComponent("sumber", "sumber.html");

    await loadComponent("footer", "footer.html");


});