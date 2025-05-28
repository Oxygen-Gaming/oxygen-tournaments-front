


const Checkout = () => {
    return(
        <div class="checkout-oxyclub-wrapper">
            <div class="checkout-oxyclub-container" role="main">
            <h1 class="checkout-oxyclub-title">Checkout OxyClub</h1>
            <form id="checkoutOxyClubForm" class="checkout-oxyclub-form" novalidate>
                <div class="checkout-oxyclub-field full-width">
                    <label for="checkoutOxyNombre" class="checkout-oxyclub-label">Nombre y apellidos</label>
                    <input type="text" id="checkoutOxyNombre" name="nombre" placeholder="Tu nombre completo" class="checkout-oxyclub-input" required autocomplete="name" />
                </div>

                <div class="checkout-oxyclub-field full-width">
                    <label for="checkoutOxyEmail" class="checkout-oxyclub-label">Correo electrónico</label>
                    <input type="email" id="checkoutOxyEmail" name="email" placeholder="tu@email.com" class="checkout-oxyclub-input" required autocomplete="email" />
                </div>

                <div class="checkout-oxyclub-field">
                    <label for="checkoutOxyTelefono" class="checkout-oxyclub-label">Teléfono</label>
                    <input type="tel" id="checkoutOxyTelefono" name="telefono" placeholder="Ej. +34 600 123 456" pattern="^\+?\d{7,15}$" class="checkout-oxyclub-input" required autocomplete="tel" />
                </div>

                <div class="checkout-oxyclub-field full-width">
                    <label for="checkoutOxyDireccion" class="checkout-oxyclub-label">Dirección (calle y número)</label>
                    <input type="text" id="checkoutOxyDireccion" name="direccion" placeholder="Tu dirección de envío" class="checkout-oxyclub-input" required />
                </div>

                <div class="checkout-oxyclub-field">
                    <label for="checkoutOxyCiudad" class="checkout-oxyclub-label">Ciudad</label>
                    <input type="text" id="checkoutOxyCiudad" name="ciudad" placeholder="Ciudad" class="checkout-oxyclub-input" required />
                </div>

                <div class="checkout-oxyclub-field">
                    <label for="checkoutOxyCP" class="checkout-oxyclub-label">Código postal</label>
                    <input type="text" id="checkoutOxyCP" name="codigo_postal" placeholder="Ej. 28001" pattern="^\d{4,6}$" class="checkout-oxyclub-input" required />
                </div>

                <div class="checkout-oxyclub-field full-width">
                    <label class="checkout-oxyclub-label">Método de pago</label>
                    <div class="checkout-oxyclub-radio-group">
                        <label class="checkout-oxyclub-radio-label">
                            <input type="radio" name="metodo_pago" value="tarjeta" required /> Tarjeta de crédito / débito
                        </label>
                        <label class="checkout-oxyclub-radio-label">
                            <input type="radio" name="metodo_pago" value="paypal" /> PayPal
                        </label>
                        <label class="checkout-oxyclub-radio-label">
                            <input type="radio" name="metodo_pago" value="transferencia" /> Transferencia bancaria
                        </label>
                    </div>
                </div>

                <button type="submit" class="checkout-oxyclub-button">Confirmar Compra</button>
            </form>
            </div>
        </div>
    )
}