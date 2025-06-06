import {defineMessages} from 'react-intl';
import sharedMessages from '../shared-messages';

let messages = defineMessages({
    variable: {
        defaultMessage: 'my variable',
        description: 'Name for the default variable',
        id: 'gui.defaultProject.variable'
    }
});

messages = {...messages, ...sharedMessages};

// use the default message if a translation function is not passed
const defaultTranslator = msgObj => msgObj.defaultMessage;

/**
 * Generate a localized version of the default project
 * @param {function} translateFunction a function to use for translating the default names
 * @return {object} the project data json for the default project
 */
const projectData = translateFunction => {
    const translator = translateFunction || defaultTranslator;
    return ({
        targets: [
            {
                isStage: true,
                name: 'Stage',
                variables: {
                    '`jEk@4|i[#Fk?(8x)AV.-my variable': [
                        translator(messages.variable),
                        0
                    ]
                },
                lists: {},
                broadcasts: {},
                blocks: {},
                currentCostume: 0,
                costumes: [
                    {
                        assetId: 'cd21514d0531fdffb22204e0ec5ed84a',
                        name: translator(messages.backdrop, {index: 1}),
                        md5ext: 'cd21514d0531fdffb22204e0ec5ed84a.svg',
                        dataFormat: 'svg',
                        rotationCenterX: 240,
                        rotationCenterY: 180
                    }
                ],
                sounds: [],
                volume: 100
            },
            {
                isStage: false,
                name: 'SendArcade',
                variables: {},
                lists: {},
                broadcasts: {},
                blocks: {
                    solana: {
                        opcode: 'solana_enableSolana',
                        next: null,
                        parent: null,
                        inputs: {},
                        fields: {},
                        shadow: true,
                        topLevel: true,
                        x: 0,
                        y: 0
                    },
                    jupiter: {
                        opcode: 'jupiter_enableJupiter',
                        next: null,
                        parent: null,
                        inputs: {},
                        fields: {},
                        shadow: true,
                        topLevel: true,
                        x: 0,
                        y: 0
                    },
                    helius: {
                        opcode: 'helius_enableHelius',
                        next: null,
                        parent: null,
                        inputs: {},
                        fields: {},
                        shadow: true,
                        topLevel: true,
                        x: 0,
                        y: 0
                    },
                    send: {
                        opcode: 'send_enableSend',
                        next: null,
                        parent: null,
                        inputs: {},
                        fields: {},
                        shadow: true,
                        topLevel: true,
                        x: 0,
                        y: 0
                    },
                    pumpFun: {
                        opcode: 'pumpFun_enablePumpFun',
                        next: null,
                        parent: null,
                        inputs: {},
                        fields: {},
                        shadow: true,
                        topLevel: true,
                        x: 0,
                        y: 0
                    },
                    coingecko: {
                        opcode: 'coingecko_enableCoingecko',
                        next: null,
                        parent: null,
                        inputs: {},
                        fields: {},
                        shadow: true,
                        topLevel: true,
                        x: 0,
                        y: 0
                    }
                },
                comments: {},
                currentCostume: 0,
                costumes: [
                    {
                        assetId: '927d672925e7b99f7813735c484c6922',
                        name: 'SendArcade',
                        bitmapResolution: 1,
                        md5ext: '927d672925e7b99f7813735c484c6922.svg',
                        dataFormat: 'svg',
                        rotationCenterX: 121,
                        rotationCenterY: 121
                    }
                ],
                sounds: [],
                volume: 100,
                visible: true,
                x: 0,
                y: 0,
                size: 100,
                direction: 90,
                draggable: false,
                rotationStyle: 'all around'
            }
        ],
        extensions: ['solana', 'jupiter'],
        meta: {
            semver: '3.0.0',
            vm: '0.1.0',
            agent: ''
        }
    });
};


export default projectData;
