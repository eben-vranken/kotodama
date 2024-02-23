import { X } from "@phosphor-icons/react";
import { FunctionComponent } from "react";

interface ModalProps {
    title: string;
    setModal: (value: boolean) => void;
    children?: React.ReactNode;
}

const Modal: FunctionComponent<ModalProps> = ({ title, setModal, children }) => {
    const handleModalClose = () => {
        setModal(false);
    };

    return (
        <section className="absolute w-full h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/30 z-20 backdrop-blur-sm">
            <section
                className="z-20 bg-body p-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-y-2 rounded-lg border-2 border-white/5 w-1/3"
            >
                {/* Heading */}
                <section className="flex items-center justify-between">
                    <h1 className="font-bold">{title}</h1>
                    <X
                        size={25}
                        className="cursor-pointer opacity-50 hover:opacity-75 transition-opacity duration-200"
                        weight="bold"
                        onClick={handleModalClose}
                    />
                </section>

                {/* Dynamically render children */}
                {children}
            </section>
        </section>
    );
};

export default Modal;