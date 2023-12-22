<?php
    $id_modele = $_POST['modeleid']
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Personnaliser la Voiture</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</head>
<body>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Raudi</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link active" aria-current="page" href="index.html">Home</a>
              <a class="nav-link" href="login.html">Login</a>
              <a class="nav-link" href="register.html">Register</a>
              <a class="nav-link" href="history.html">History</a>
              <a class="nav-link" href="customize.html">Customize</a>
            </div>
          </div>
        </div>
      </nav>
    <h1>Personnaliser votre voiture</h1>

    <h2>Modèle de Voiture</h2>
    <select id="modeleSelect" onchange="calculateTotal()">
        <!-- Remplacez ces options par les modèles réels -->
        <option value="<?= $modeleid ?>" data-prix="20000"><?= $modeleid ?></option>
        <!-- ... Ajoutez d'autres modèles ici ... -->
    </select>

    <h2>Options</h2>
    <div id="optionsList">
        <!-- Remplacez ces checkboxes par les options réelles -->
        <input type="checkbox" id="option1" data-prix="1000" onchange="calculateTotal()">
        <label for="option1">Option 1 (+1000€)</label><br>

        <input type="checkbox" id="option2" data-prix="1500" onchange="calculateTotal()">
        <label for="option2">Option 2 (+1500€)</label><br>
        <!-- ... Ajoutez d'autres options ici ... -->
    </div>

    <h2>Total</h2>
    <p id="totalPrice">0€</p>

    <script>
       // customize.js
document.addEventListener("DOMContentLoaded", function () {
    // Récupérer les éléments du DOM
    const modeleSelect = document.getElementById('modeleSelect');
    const optionsList = document.getElementById('optionsList');
    const totalPriceElement = document.getElementById('totalPrice');

    // Données des modèles
    const modeles = [
        { id: 1, nom: 'Modèle 1', prix: 20000 },
        { id: 2, nom: 'Modèle 2', prix: 25000 },
        // Ajoutez d'autres modèles ici
    ];

    // Données des options
    const options = [
        { id: 1, nom: 'Option 1', prix: 1000 },
        { id: 2, nom: 'Option 2', prix: 1500 },
        // Ajoutez d'autres options ici
    ];

    // Remplir la liste des modèles
    modeles.forEach(modele => {
        const option = document.createElement('option');
        option.value = modele.id;
        option.setAttribute('data-prix', modele.prix);
        option.textContent = modele.nom;
        modeleSelect.appendChild(option);
    });

    // Remplir la liste des options
    options.forEach(option => {
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `option${option.id}`;
        checkbox.setAttribute('data-prix', option.prix);
        checkbox.addEventListener('change', calculateTotal);

        const label = document.createElement('label');
        label.htmlFor = `option${option.id}`;
        label.textContent = `${option.nom} (+${option.prix}€)`;

        optionsList.appendChild(checkbox);
        optionsList.appendChild(label);
        optionsList.appendChild(document.createElement('br'));
    });

    // Fonction pour calculer le total
    function calculateTotal() {
        // Récupérer le prix du modèle sélectionné
        const modelePrix = parseInt(modeleSelect.options[modeleSelect.selectedIndex].getAttribute('data-prix'), 10) || 0;

        // Récupérer le prix des options sélectionnées
        const checkboxes = optionsList.querySelectorAll('input[type="checkbox"]');
        let optionsPrix = 0;
        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                optionsPrix += parseInt(checkbox.getAttribute('data-prix'), 10) || 0;
            }
        });

        // Calculer et afficher le total
        const totalPrice = modelePrix + optionsPrix;
        totalPriceElement.textContent = `${totalPrice}€`;
    }

    // Appeler la fonction calculateTotal pour afficher le prix initial
    calculateTotal();
});

    </script>

</body>
</html>




<!-- //<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Personnaliser la Voiture</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</head>

<body>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <!-- ... (le reste du code est inchangé) ... -->
    </nav>
    <h1>Personnaliser votre voiture</h1>

    <h2>Modèle de Voiture</h2>
    <select id="modeleSelect" onchange="calculateTotal()"></select>

    <h2>Options</h2>
    <div id="optionsList"></div>

    <h2>Total</h2>
    <p id="totalPrice">0€</p>

    <script>
        document.addEventListener("DOMContentLoaded", function () {
            const modeleSelect = document.getElementById('modeleSelect');
            const optionsList = document.getElementById('optionsList');
            const totalPriceElement = document.getElementById('totalPrice');

            // Fetch des modèles depuis le backend
            fetch('/api/modeles')
                .then(response => response.json())
                .then(modeles => {
                    modeles.forEach(modele => {
                        const option = document.createElement('option');
                        option.value = modele.id;
                        option.setAttribute('data-prix', modele.prix);
                        option.textContent = modele.nom;
                        modeleSelect.appendChild(option);
                    });

                    // Fetch des options depuis le backend
                    return fetch('/api/options');
                })
                .then(response => response.json())
                .then(options => {
                    options.forEach(option => {
                        const checkbox = document.createElement('input');
                        checkbox.type = 'checkbox';
                        checkbox.id = `option${option.id}`;
                        checkbox.setAttribute('data-prix', option.prix);
                        checkbox.addEventListener('change', calculateTotal);

                        const label = document.createElement('label');
                        label.htmlFor = `option${option.id}`;
                        label.textContent = `${option.nom} (+${option.prix}€)`;

                        optionsList.appendChild(checkbox);
                        optionsList.appendChild(label);
                        optionsList.appendChild(document.createElement('br'));
                    });

                    // Appeler la fonction calculateTotal pour afficher le prix initial
                    calculateTotal();
                })
                .catch(error => console.error('Error fetching data:', error));

            function calculateTotal() {
                const modelePrix = parseInt(modeleSelect.options[modeleSelect.selectedIndex].getAttribute('data-prix'), 10) || 0;

                const checkboxes = optionsList.querySelectorAll('input[type="checkbox"]');
                let optionsPrix = 0;
                checkboxes.forEach(checkbox => {
                    if (checkbox.checked) {
                        optionsPrix += parseInt(checkbox.getAttribute('data-prix'), 10) || 0;
                    }
                });

                const totalPrice = modelePrix + optionsPrix;
                totalPriceElement.textContent = `${totalPrice}€`;
            }
        });
    </script>
</body>

</html>
 -->