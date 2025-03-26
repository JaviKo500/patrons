/**
 * ! Singleton:
 * Es un patrón de diseño creacional que garantiza que una clase
 * tenga una única instancia y proporciona un punto de acceso global a ella.
 *
 * * Es útil cuando necesitas controlar el acceso a una única instancia
 * * de una clase, como por ejemplo, en un objeto de base de datos o en un
 * * objeto de configuración.
 *
 * https://refactoring.guru/es/design-patterns/singleton
 */

import { configManager } from './singleton/config-manager.ts';

configManager.setConfig('apiKey', '123456789');
configManager.setConfig('apiUrl', '312121');
configManager.setConfig('api-key', '123456789');


console.log(configManager.getConfig('apiKey'));
console.log(configManager.getAllConfig());
