这是大佬  @0xAA_Science 
我用来刷lava的积分 
需要node  npm  我在 ubuntu 运行
步骤 1 : git clone https://github.com/xmrjun/WTF

cd  "/root/WTF/"

安装 npm install ethers --save 

换自己的 rpc 文件位置在 "/root/WTF/01_HelloVitalik/HelloVitalik.js"

运行 node 01_HelloVitalik/HelloVitalik.js  

然后 设置 12 小时自动运行 
cd

sudo crontab -e

0 */12 * * * /usr/bin/node /root/WTF/01_HelloVitalik/HelloVitalik.js >> /root/WTF/01_HelloVitalik/HelloVitalik.log 2>&1

sudo crontab -l

chmod +x /root/WTF/01_HelloVitalik/HelloVitalik.js

