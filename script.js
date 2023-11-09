function toggleNav() {
    var sidebar = document.getElementById("mySidebar");
    var content = document.getElementById("main");
    if (sidebar.style.width === "250px") {
        sidebar.style.width = "0";
        content.style.marginLeft = "0";
    } else {
        sidebar.style.width = "250px";
        content.style.marginLeft = "250px";
    }
}

function cambiarFondo() {
    // Obtiene el valor seleccionado en el select
    var fondoSeleccionado = document.getElementById("selectFondos").value;

    // Cambia el fondo de la página según la opción seleccionada
    switch (fondoSeleccionado) {
        case "fondo1":
            document.body.style.backgroundImage = "url('./imagen/7.jpg')";
            break;
        case "fondo2":
            document.body.style.backgroundImage = "url('./imagen/6.jpg')";
            break;
        case "fondo3":
            document.body.style.backgroundImage = "url('./imagen/8.jpg')";
            break;
        case "fondo4":
            document.body.style.backgroundImage = "url('./imagen/9.png')";
            break;
        default:
            // En caso de una opción no reconocida
            document.body.style.backgroundImage = "url('./imagen/7.jpg')";
    }
}

document.getElementById('qintentos').addEventListener('change', function() {
    if (this.checked) {
        // El checkbox está marcado, incluye "quiebre por 7mo" en el mensaje
        document.getElementById('').textContent = 'Se marca al número: ${num1} ${contesta1} contesta ${motivo}, se marca al otro número: ${num2} ${contesta2} contesta ${motivo2}, Titular: ${nombreTitular}, se registra intento de contacto en el aplicativo Agendador. Llamada realizada en fecha ${fecha}. Gestionado por ${nomasesor} en Go Contact';
    } else {
        // El checkbox no está marcado, elimina el texto "quiebre por 7mo"
        document.getElementById('').textContent = '';
    }
});

document.addEventListener("click", async (e) => {
    const goava = document.getElementById('goava').value;
    const nomasesor = document.getElementById('nomasesor').value;
    const num1 = document.getElementById('num1').value;
    const contesta1 = document.getElementById('contesta1').value;
    const num2 = document.getElementById('num2').value;
    const contesta2 = document.getElementById('contesta2').value;
    const motivo = document.getElementById('motivo').value;
    const motivo2 = document.getElementById('motivo2').value;
    const nombreTitular = document.getElementById('nombreTitular').value;
    const fecha = new Date().toLocaleDateString();

    if (e.target.matches("#generarIntento")) {
        try {
            await navigator.clipboard.writeText(`Se marca al número: ${num1} ${contesta1} contesta ${motivo}, se marca al otro número: ${num2} ${contesta2} contesta ${motivo2}, Titular: ${nombreTitular}, se registra intento de contacto en el aplicativo Agendador. Llamada realizada en fecha ${fecha}. Gestionado por ${nomasesor} en Go Contact`);

            // Limpiar los valores después de copiar al portapapeles
            document.getElementById('num1').value = '';
            document.getElementById('contesta1').value = 'NO';
            document.getElementById('num2').value = '';
            document.getElementById('contesta2').value = 'NO';
            document.getElementById('motivo').value = '';
            document.getElementById('motivo2').value = '';
            document.getElementById('nombreTitular').value = '';

            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 4000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer);
                    toast.addEventListener('mouseleave', Swal.resumeTimer);
                }
            });

            Toast.fire({
                icon: 'success',
                title: `Se marca al número: ${num1} ${contesta1} contesta ${motivo}, se marca al otro número: ${num2} ${contesta2} contesta ${motivo2}, Titular: ${nombreTitular}, se registra intento de contacto en el aplicativo Agendador. Llamada realizada en fecha ${fecha}. Gestionado por ${nomasesor} en Go Contact`
            });
        } catch (err) {
            console.error('Error al copiar al portapapeles:', err);
        }
    }
});
$('#goava, #goava1, #goava2, #goava3').change(function() {
    // Obtener el valor seleccionado
    var selectedOption = $(this).val();

    // Deshabilitar o habilitar los cuadros de texto según la opción seleccionada
    if (selectedOption === 'Go Contact.') {
        $('#extava, #extava1, #extava2, #extava3, #logava, #logava1, #logava2, #logava3').prop('disabled', true);
    } else if (selectedOption === 'Avaya') {
        $('#extava, #extava1, #extava2, #extava3, #logava, #logava1, #logava2, #logava3').prop('disabled', false);
    }
});



document.addEventListener("click", async (e) => {
    const nomasesor1 = document.getElementById('nomasesor1').value;
    const numAgenda = document.getElementById('numAgenda').value;
    const doc = document.getElementById('doc').value;
    const nombreAgenda = document.getElementById('nombreAgenda').value;
    const qcontesta = document.getElementById('qcontesta').value;
    const direccion = document.getElementById('direccion').value;
    const barrio = document.getElementById('barrio').value;
    const fechaAgenda = document.getElementById('fechaAgenda').value;
    const horaAgenda = document.getElementById('horaAgenda').value;
    const indicaciones = document.getElementById('indicaciones').value;
    const nomagenda = document.getElementById('nomagenda').value;

    const fecha = new Date().toLocaleDateString();

    if (e.target.matches("#generarAgenda")) {
        try {
            await navigator.clipboard.writeText(`En comunicación al número: ${numAgenda} el titular ${nombreAgenda} con CC. ${doc} contesta tt ${qcontesta}, confirma dirección: ${direccion}, Barrio: ${barrio}, ${indicaciones}, se agenda cita para el día ${fechaAgenda} Franja ${horaAgenda}. Llamada realizada el día ${fecha} Gestionado por ${nomasesor1} Go Contact.`);

            // Limpiar los valores después de copiar al portapapeles
            document.getElementById('numAgenda').value = '';
            document.getElementById('doc').value = '';
            document.getElementById('nombreAgenda').value = '';
            document.getElementById('direccion').value = '';
            document.getElementById('barrio').value = '';
            document.getElementById('fechaAgenda').value = '';
            document.getElementById('horaAgenda').value = 'AM';
            document.getElementById('indicaciones').value = '';

            const Toast = Swal.mixin({
                toast: true,
                position: 'top-start',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer);
                    toast.addEventListener('mouseleave', Swal.resumeTimer);
                }
            });

            Toast.fire({
                icon: 'success',
                title: `En comunicación al número: ${numAgenda} el titular ${nombreAgenda} con CC. ${doc} contesta tt ${qcontesta} ${nomagenda}, confirma dirección: ${direccion}, Barrio: ${barrio}, ${indicaciones}, se agenda cita para el día ${fechaAgenda} Franja ${horaAgenda}. Llamada realizada el día ${fecha}. Gestionado por ${nomasesor1} Go Contact.`
            });
        } catch (err) {
            console.error('Error al copiar al portapapeles:', err);
        }
    }
});

document.addEventListener("click", async (e) => {
    const nomasesor2 = document.getElementById('nomasesor2').value;
    const numQuiebre = document.getElementById('numQuiebre').value;
    const nombreQuiebre = document.getElementById('nombreQuiebre').value;
    const motivoQuiebre = document.getElementById('motivoQuiebre').value;

    const fecha = new Date().toLocaleDateString();

    if (e.target.matches("#generarQuiebre")) {
        try {
            await navigator.clipboard.writeText(`Se marca al número ${numQuiebre} contesta titular: ${nombreQuiebre} quien informa que ${motivoQuiebre}, se registra Quiebre de la orden en el aplicativo Agendador. Llamada realizada el dia ${fecha}. Gestionado por ${nomasesor2} Go Contact`);

            // Limpiar los valores después de copiar al portapapeles
            document.getElementById('numQuiebre').value = '';
            document.getElementById('nombreQuiebre').value = '';
            document.getElementById('motivoQuiebre').value = '';

            const Toast = Swal.mixin({
                toast: true,
                position: 'top-start',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer);
                    toast.addEventListener('mouseleave', Swal.resumeTimer);
                }
            });

            Toast.fire({
                icon: 'success',
                title: `Se marca al número ${numQuiebre} contesta titular: ${nombreQuiebre} quien informa que ${motivoQuiebre}, se registra Quiebre de la orden en el aplicativo Agendador. Llamada realizada el dia ${fecha}. Gestionado por ${nomasesor2} Go Contact`
            });
        } catch (err) {
            console.error('Error al copiar al portapapeles:', err);
        }
    }
});

document.addEventListener("click", async (e) => {
    const nomasesor3 = document.getElementById('nomasesor3').value;
    const numCompromiso = document.getElementById('numCompromiso').value;
    const nombreCompromiso = document.getElementById('nombreCompromiso').value;
    const motivoCompromiso = document.getElementById('motivoCompromiso').value;
    const fechaCompromiso = document.getElementById('fechaCompromiso').value;

    const fecha = new Date().toLocaleDateString();

    if (e.target.matches("#generarCompromiso")) {
        try {
            await navigator.clipboard.writeText(`Se marca al número: ${numCompromiso} contesta titular: ${nombreCompromiso}, indica ${motivoCompromiso}, que nos comuniquemos el día: ${fechaCompromiso}. Se deja compromiso de llamada Gestionado por ${nomasesor3} en fecha ${fecha} Go Contact.`);

            // Limpiar los valores después de copiar al portapapeles
            document.getElementById('numCompromiso').value = '';
            document.getElementById('nombreCompromiso').value = '';
            document.getElementById('motivoCompromiso').value = '';
            document.getElementById('fechaCompromiso').value = '';

            const Toast = Swal.mixin({
                toast: true,
                position: 'top-start',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer);
                    toast.addEventListener('mouseleave', Swal.resumeTimer);
                }
            });

            Toast.fire({
                icon: 'success',
                title: `Se marca al número: ${numCompromiso} contesta titular: ${nombreCompromiso}, indica ${motivoCompromiso}, que nos comuniquemos el día: ${fechaCompromiso}. Se deja compromiso de llamada Gestionado por ${nomasesor3} en fecha ${fecha} Go Contact.`
            });
        } catch (err) {
            console.error('Error al copiar al portapapeles:', err);
        }
    }
});
