const MINE_RATE = 1000;
const INITIAL_DIFFICULTY = 3;

const GENESIS_DATA = {
    timestamp: 1,
    lastHash: '-----',
    hash: 'hash-one',
    difficulty: INITIAL_DIFFICULTY,
    nonce: 0,
    data: []
};

const STARTING_BALANCE = 1000;

const REWARD_INPUT = { address: '*authorised-reward*' };

const MINING_REWARD = 50;

const PUBNUB_CREDENTIALS = {
    publishKey: 'pub-c-b4e2bdd5-8f07-4d0b-89fe-c338f84f2ce6',
    subscribeKey: 'sub-c-fd1a56e6-7f91-4993-8744-689cec78083b',
    secretKey: 'sec-c-YjhlODIzYWUtZmY3Mi00MWIyLWI0YjYtZmE1ZjBjODYxYTZh'
  };

module.exports = { 
    GENESIS_DATA, 
    MINE_RATE, 
    STARTING_BALANCE, 
    REWARD_INPUT, 
    MINING_REWARD,
    PUBNUB_CREDENTIALS
};