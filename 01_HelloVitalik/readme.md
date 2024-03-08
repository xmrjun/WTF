这是大佬  @0xAA_Science 
我用来刷lava的积分 
需要node  npm  我在 ubuntu 运行
步骤 1 : git clone https://github.com/xmrjun/WTF

2 ：cd  "/root/WTF/"

3 ：npm install ethers --save 

4 ：换自己的 rpc 文件位置在 "/root/WTF/01_HelloVitalik/HelloVitalik.js"

5 ：运行 node 01_HelloVitalik/HelloVitalik.js  

然后 设置 12 小时自动运行 
6： cd

7： sudo crontab -e （看自己习惯用那个编辑器）

8： 0 0 * * * /root/.nvm/versions/node/v21.6.2/bin/node /root/WTF/01_HelloVitalik/HelloVitalik.js >> /root/WTF/cron.log 2>&1

9：sudo crontab -l

10：chmod +x /root/WTF/01_HelloVitalik/HelloVitalik.js

日志文件在 这个位置  /root/WTF/cron.log

