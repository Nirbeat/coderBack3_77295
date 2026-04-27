import client from 'prom-client';

const register = new client.Registry();

// Habilitar métricas por defecto
// client.collectDefaultMetrics({ register });

// Crear métricas personalizadas para login
export const loginSuccessCounter = new client.Counter({
    name: 'login_success_total',
    help: 'Total de inicios de sesión exitosos'
});

export const loginFailureCounter = new client.Counter({
    name: 'login_failure_total',
    help: 'Total de inicios de sesión fallidos'
});

// Registrar las métricas
register.registerMetric(loginSuccessCounter);
register.registerMetric(loginFailureCounter);

export { register };