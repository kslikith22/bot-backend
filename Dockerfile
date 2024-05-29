From node

WORKDIR /bot-backend

COPY . /bot-backend

RUN rm -rf yarn.lock && rm -rf node_modules

RUN yarn install

CMD yarn start
