import assert from 'node:assert';
import { fase, caminoLuna } from '../src/scripts/luna.ts';
const nueva = fase(new Date(Date.UTC(2024, 0, 11, 11, 57)));
const llena = fase(new Date(Date.UTC(2024, 0, 25, 17, 54)));
assert.ok(nueva < 0.02 || nueva > 0.98, `nueva ${nueva}`);
assert.ok(Math.abs(llena - 0.5) < 0.03, `llena ${llena}`);
console.log("luna ok");
