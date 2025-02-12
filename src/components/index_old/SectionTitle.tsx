import '@/styles/index.css';

interface SectionTitleProps {
    title: string;
    description: string;
    max_width: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, description, max_width }) => {
    return (
        <div style={{
                display: "flex",
                alignItems: "center",
                gap: "40px",
                marginBottom: "50px"
            }}>
            <h2 style={{
                fontSize: "40px",
                padding: "0 15px",
                backgroundColor: "#b9ff66",
                whiteSpace: "nowrap"
            }}>{title}</h2>
            <p style={{ fontSize: "18px", maxWidth: max_width }}>{description}</p>
        </div>
    );
};

export default SectionTitle