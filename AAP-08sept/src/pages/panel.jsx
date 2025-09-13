export const DashboardPage = () => {
    const mensaje = "Hola mundo " + (new Date()).toLocaleTimeString() + " " + (new Date()).toLocaleDateString();
    return (
        <section>
            {mensaje}
        </section>
    )
}