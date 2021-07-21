# best-cli-server

前端脚手架 - 服务

### docker 部署 egg.js
- Dockerfile

```bash
# 提前删除 node_mudules等忽略文件 再上传
scp -r ./** root@112.74.201.142:/home/best-cli/server/
cd /home/best-cli
# 创建镜像
docker build -t best-cli-server:v1.0 ./server    
# 创建启动容器
docker run -d -p 7002:7001 --name best-cli-server 06368db78fef(镜像id)
# 7002 外网映射端口
# 7001 容器内部端口
```