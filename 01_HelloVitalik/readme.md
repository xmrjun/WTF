���Ǵ���  @0xAA_Science 
������ˢlava�Ļ��� 
��Ҫnode  npm  ���� ubuntu ����
���� 1 : https://github.com/xmrjun/WTF
cd  "/root/WTF/"

��װ npm install ethers --save 

���Լ��� rpc �ļ�λ���� "/root/WTF/01_HelloVitalik/HelloVitalik.js"

���� node 01_HelloVitalik/HelloVitalik.js  

Ȼ�� 12 Сʱ�Զ����� 
cd
sudo crontab -e

0 */12 * * * /usr/bin/node /root/WTF-Ethers/01_HelloVitalik/HelloVitalik.js >> /root/WTF-Ethers/01_HelloVitalik/HelloVitalik.log 2>&1

sudo crontab -l

sudo chmod +x /root/WTF-Ethers/01_HelloVitalik/HelloVitalik.js 

