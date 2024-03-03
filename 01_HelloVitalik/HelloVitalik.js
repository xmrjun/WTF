// ����ethers��
import { ethers } from "ethers";
// playcode��Ѱ治�ܰ�װethers�������������Ҫ��������import��������������ע�͵���
// import { ethers } from "https://cdnjs.cloudflare.com/ajax/libs/ethers/6.2.3/ethers.js";

// ����ethersĬ�ϵ�Provider������̫������
// const provider = new ethers.getDefaultProvider();
const ALCHEMY_MAINNET_URL = 'https://eth1.lava.build/lava-referer-473578a9-29ac-44df-a4b9-af08031422c1/';
const provider = new ethers.JsonRpcProvider(ALCHEMY_MAINNET_URL)

const main = async () => {
    // ��ѯvitalik��ETH���
    const balance = await provider.getBalance(`vitalik.eth`);
    // ����������console
    console.log(`ETH Balance of vitalik: ${ethers.formatEther(balance)} ETH`);}
main()