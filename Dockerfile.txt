FROM smebberson/alpine-nginx

ADD . /usr/html/
ADD etc /etc/

RUN ln -sf /dev/stdout /var/log/nginx/access.log && \
    ln -sf /dev/stderr /var/log/nginx/error.log
