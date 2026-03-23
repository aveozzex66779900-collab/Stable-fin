
type Props = {
  qr: string;
};

export default function QRCodeView({ qr }: Props) {
  return (
    <div style={{ marginTop: 20 }}>
      <img src={qr} alt="QR Code" width={200} />
    </div>
  );
}
