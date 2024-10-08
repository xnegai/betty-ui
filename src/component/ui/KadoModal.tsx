import { useWallet } from "@/providers/wallet";
import { Modal } from "./Modal";

export default function KadoModal({ onClose }: { onClose: () => void }) {
  const { account } = useWallet();
  return (
    <Modal
      className="nopad"
      show={true}
      close={() => {
        onClose();
      }}
    >
      <iframe
        src={`https://app.kado.money?${new URLSearchParams({
          apiKey: "8b1e6d84-c305-4d91-b1e4-a928a441317d",
          onPayCurrency: "USD",
          onRevCurrency: "USDC",
          offPayCurrency: "USDC",
          offRevCurrency: "USD",
          onPayAmount: "500",
          offPayAmount: "200",
          onToAddress: account?.address || "",
          offFromAddress: account?.address || "",
          cryptoList: "USDC",
          fiatList: "USD,CAD,GBP,EUR,MXN,COP",
          network: "kujira",
          product: "BUY",
        }).toString()}`}
        width="500"
        height="800"
        style={{ border: 0 }}
        allow="clipboard-write; payment; accelerometer; gyroscope; camera; geolocation; autoplay; fullscreen;"
      />
    </Modal>
  );
}
