// components/EventModal.tsx
import "./eventModal.scss";
import React from "react";
type EventModalProps = {
  isOpen: boolean;
  onClose: () => void;
  eventDetails: any;
};

const EventModal: React.FC<EventModalProps> = ({ isOpen, onClose, eventDetails }) => {
  if (!isOpen) return null;


  
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Etkinlik Detayları</h2>
        <div className="event-details">
          <p><strong>Personel Adı:</strong> {eventDetails?.staffName}</p>
          <p><strong>Vardiya Adı:</strong> {eventDetails?.shiftName}</p>
          <p><strong>Tarih:</strong> {eventDetails?.date}</p>
          <p><strong>Başlangıç Saati:</strong> {eventDetails?.startTime}</p>
          <p><strong>Bitiş Saati:</strong> {eventDetails?.endTime}</p>
        </div>
        <button onClick={onClose}>Kapat</button>
      </div>
    </div>
  );
};

export default EventModal;
