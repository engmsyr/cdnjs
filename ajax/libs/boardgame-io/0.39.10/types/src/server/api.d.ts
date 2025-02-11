import * as StorageAPI from './db/base';
import { Server, Game } from '../types';
/**
 * Creates a new game.
 *
 * @param {object} db - The storage API.
 * @param {object} game - The game config object.
 * @param {number} numPlayers - The number of players.
 * @param {object} setupData - User-defined object that's available
 *                             during game setup.
 * @param {object } lobbyConfig - Configuration options for the lobby.
 * @param {boolean} unlisted - Whether the game should be excluded from public listing.
 */
export declare const CreateGame: (db: StorageAPI.Sync | StorageAPI.Async, game: Game<any, import("../types").Ctx>, numPlayers: number, setupData: object, lobbyConfig: Server.LobbyConfig, unlisted: boolean) => Promise<string>;
export declare const createApiServer: ({ db, games, lobbyConfig, generateCredentials, }: {
    db: any;
    games: any;
    lobbyConfig?: Server.LobbyConfig;
    generateCredentials?: Server.GenerateCredentials;
}) => any;
export declare const addApiToServer: ({ app, db, games, lobbyConfig, generateCredentials, }: {
    app: any;
    games: Game<any, import("../types").Ctx>[];
    lobbyConfig?: Server.LobbyConfig;
    generateCredentials?: Server.GenerateCredentials;
    db: StorageAPI.Sync | StorageAPI.Async;
}) => any;
