import pino from 'pino';

const transport = pino.transport(
    {
        targets: [{
            target: "pino/file",
            options: {
                destination: "data.log"
            },
            level: "error"
        },
        {
            level: "info",
            options: { destination: "stdout" }
        }
        ]
    }
);

const logger = pino(transport);

export default logger;
