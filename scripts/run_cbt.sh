#!/bin/bash
node_modules/.bin/cross-env E2E='CBT' node_modules/.bin/nightwatch -e WIN7-IE9 & \
node_modules/.bin/cross-env E2E='CBT' node_modules/.bin/nightwatch -e WIN7-IE10 && \
node_modules/.bin/cross-env E2E='CBT' node_modules/.bin/nightwatch -e WIN7-IE11 && \
node_modules/.bin/cross-env E2E='CBT' node_modules/.bin/nightwatch -e WIN8-IE11 && \
node_modules/.bin/cross-env E2E='CBT' node_modules/.bin/nightwatch -e WIN10-IE11 && \
node_modules/.bin/cross-env E2E='CBT' node_modules/.bin/nightwatch -e MAC9 && \
node_modules/.bin/cross-env E2E='CBT' node_modules/.bin/nightwatch -e MAC10 && \
node_modules/.bin/cross-env E2E='CBT' node_modules/.bin/nightwatch -e MAC11 && \
node_modules/.bin/cross-env E2E='CBT' node_modules/.bin/nightwatch -e Android42 && \
node_modules/.bin/cross-env E2E='CBT' node_modules/.bin/nightwatch -e Android44 && \
# Batch these they're really slow, but batching is less reliable
node_modules/.bin/cross-env E2E='CBT' node_modules/.bin/nightwatch -e iPadPro93,iPadAir8,iPadMini
node_modules/.bin/cross-env E2E='CBT' node_modules/.bin/nightwatch -e iPhone6P,iPhone6,iPhone5s
