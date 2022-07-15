import { useRef } from 'react';
import { AbdsButton, AbdsModal } from '@abds/react-bindings';

export const Modal = () => {
  const modalRef = useRef(null);

  const toggleModal = () => {
    modalRef.current?.setAttribute('open', !modalRef.current?.open);
  };

  return (
    <section id="modal">
      <AbdsButton appearance="outline" className="fixed bottom-1 right-1" onClick={toggleModal} palette="destructive">
        Important information
      </AbdsButton>

      <AbdsModal
        header-text="Not important information"
        icon="information-circle"
        id="modal-1"
        palette="danger"
        ref={modalRef}
      >
        <p slot="modal-header">Modal header which shouldn&rsquo;t show</p>

        <div slot="modal-body">
          <ul>
            <li>This is a sentence.</li>
            <li>This is another sentence.</li>
            <li>This is yet another sentence.</li>
            <li>You guessed it, this is a sentence.</li>
          </ul>
          <ul>
            <li>This is a sentence.</li>
            <li>This is another sentence.</li>
            <li>This is yet another sentence.</li>
            <li>You guessed it, this is a sentence.</li>
          </ul>
          <ul>
            <li>This is a sentence.</li>
            <li>This is another sentence.</li>
            <li>This is yet another sentence.</li>
            <li>You guessed it, this is a sentence.</li>
          </ul>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid fugit hic tempora beatae nostrum et,
          explicabo cumque libero laborum a sequi accusamus reprehenderit quisquam possimus, amet unde aspernatur,
          temporibus vel. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid fugit hic tempora beatae
          nostrum et, explicabo cumque libero laborum a sequi accusamus reprehenderit quisquam possimus, amet unde
          aspernatur, temporibus vel.
        </div>

        <div slot="modal-footer">
          <AbdsButton appearance="outline" className="mr-1" palette="neutral">
            This button will not close modal
          </AbdsButton>
          <AbdsButton>This one either</AbdsButton>
        </div>

        <p>no slot specified</p>
      </AbdsModal>
    </section>
  );
};
