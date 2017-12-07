#!/usr/bin/env node
const _ = require('lodash');
const ubsub = require('ubsub');
const notifier = require('node-notifier');
const os = require('os');
const fs = require('fs');

const CONFIG_PATH = `${os.homedir()}/.ubsub`;
function loadConfig() {
  if (fs.existsSync(CONFIG_PATH))
    return JSON.parse(fs.readFileSync(CONFIG_PATH, 'utf8'));
  return {};
}

const args = require('yargs')
  .usage('$0 [args]')
  .help('help')
  .alias('help', 'h')
  .string('user')
  .describe('user', 'User id to override one that you logged in to')
  .string('userkey')
  .describe('userkey', 'User key to override your logged in account')
  .describe('topic', 'The topic to listen on')
  .string('topic')
  .alias('topic', 't')
  .demand('topic')
  .describe('messagekey', 'The key to lookup the message from the payload')
  .string('messagekey')
  .alias('messagekey', 'mk')
  .default('messagekey', 'message')
  .describe('titlekey', 'The key to lookup the title from the payload')
  .string('titlekey')
  .alias('titlekey', 'tk')
  .default('titlekey', 'title')
  .describe('stickykey', 'The key to lookup whether or not the message is sticky in the payload')
  .string('stickykey')
  .describe('sticky', 'Messages are sticky (if not specified by event)')
  .boolean('sticky')
  .default('sticky', false)
  .describe('prioritykey', 'Key to determine message priority from event')
  .string('prioritykey')
  .describe('priority', 'The default priority')
  .number('priority')
  .default('priority', 0)
  .describe('imagekey', 'The key to use an image from the event')
  .string('imagekey')
  .describe('image', 'The default image to use for the event')
  .string('image')
  .env('UBSUB')
  .version()
  .epilog(`You can set login information via environmental variables,
    eg. UBSUB_USER, UBSUB_USERKEY`)
  .argv;

const cfg = loadConfig();
const client = ubsub(args.user || cfg.userId, args.userkey || cfg.userKey);

console.log(`Listening to ${args.user}:${args.topic}...`);
client.listen(args.topic, (payload) => {
  const message = _.get(payload, args.messagekey, 'Undefined message');
  const title = _.get(payload, args.titlekey, 'UbSub Event');
  const sticky = !!_.get(payload, args.stickykey, args.sticky);
  const priority = ~~_.get(payload, args.prioritykey, args.priority);
  const image = _.get(payload, args.imagekey, args.image);

  console.log(`Received message: [${title}] ${message}`);

  notifier.notify({
    title,
    message,
    icon: image,
    wait: sticky,
    priority,
  });
});
