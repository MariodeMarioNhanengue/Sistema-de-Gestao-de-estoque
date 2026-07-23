// Alterna a visibilidade do campo de palavra-passe na tela de login.
document.addEventListener('DOMContentLoaded', function () {
    var toggleButtons = document.querySelectorAll('.toggle-password');

    toggleButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            var targetId = button.getAttribute('data-target');
            var input = document.getElementById(targetId);
            if (!input) return;

            var isHidden = input.getAttribute('type') === 'password';
            input.setAttribute('type', isHidden ? 'text' : 'password');
            button.setAttribute(
                'aria-label',
                isHidden ? 'Ocultar palavra-passe' : 'Mostrar palavra-passe'
            );
        });
    });
});
