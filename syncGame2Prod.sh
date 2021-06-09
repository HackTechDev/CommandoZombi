#!/bin/sh

rsync -avz --exclude='.git/' --exclude='node_modules/' --exclude='script/' --exclude='src/' --delete phaser3_commandozombi/ nyrjjbc@ssh.cluster030.hosting.ovh.net:/homez.1509/nyrjjbc/commandozombi/
