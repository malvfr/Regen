import { utilities as nestWinstonModuleUtilities } from 'nest-winston';
import { join } from 'path';
import * as winston from 'winston';
import 'winston-daily-rotate-file';

const timezoned = () => {
    return new Date().toLocaleString('pt-br', {
        timeZone: 'America/Sao_Paulo'
    });
};

const buildWinstonTransport = (filename: string, level?: string) => {
    return new winston.transports.DailyRotateFile({
        filename,
        dirname: join(process.cwd(), "/logs"),
        format: winston.format.combine(
            winston.format.timestamp({
                format: timezoned
            }),
            winston.format.json(),
        ),
        level: level || undefined,
        handleExceptions: true,
        json: true,
        zippedArchive: true,
        maxSize: '20m'
    });
};

export const getLoggerConfig = () => ({
    transports: [
        new winston.transports.Console({
            format: winston.format.combine(
                winston.format.timestamp({
                    format: timezoned
                }),
                winston.format.json(),
                nestWinstonModuleUtilities.format.nestLike(),
            ),
        }),
        buildWinstonTransport('application-%DATE%.log'),
        buildWinstonTransport('errors-%DATE%.log', 'error')
    ],
});