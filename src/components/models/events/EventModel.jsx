import { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import styles from "./event.module.scss"; // Update style to reflect Event
import { createEvent } from "../../../firebase/firebase"; // Make sure you import the createEvent function
import { serverTimestamp } from "firebase/firestore";
import Select from "react-select";
import { AuthContext } from "../../../contexts/AuthContext";

function EventModel({ isShow, setShow, setUpdateFeed, updateFeed }) {
  const { currentUser } = useContext(AuthContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [priority, setPriority] = useState("1"); // Default priority to 1
  const [createdBy, setCreatedBy] = useState(currentUser.auth.uid);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");





  useEffect(() => {
    // Get the current date and time
    const now = new Date();

    // Format it as 'YYYY-MM-DDTHH:mm'
    const formattedDate = now.toISOString().slice(0, 16);

    // Set the default value of the date input to current date and time
    setDate(formattedDate);
  }, [isShow]);


  const resetModel = () => {
    setTitle("");
    setDescription("");
    setLocation("");
    setDate("");
    setPriority("1");
    setCreatedBy(currentUser.auth.uid);
    setLoading(false);
    setMessage("");
    setError("");
  };

  const handleAddEvent = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      await createEvent({
        title: title,
        description: description,
        location: location,
        date: date,
        priority: priority,
        createdBy: createdBy,
        createdAt: serverTimestamp(),
      });

      setMessage("تم إضافة الحدث بنجاح");
    } catch (error) {
      setError("خطأ في إضافة الحدث");
    }
    setLoading(false);
    setUpdateFeed(!updateFeed);
    resetModel();
  };

  return (
    <>
      <Modal
        size="lg"
        show={isShow}
        onHide={() => setShow(false)}
        backdrop="static"
        keyboard={false}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header>
          <Modal.Title id="example-modal-sizes-title-lg">
            إضافة حدث جديد
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className={styles.addEvent}>
            <h2>إضافة حدث</h2>
            <form onSubmit={handleAddEvent} className={styles.addEventForm}>
              <div className="form-group">
                <label htmlFor="title">عنوان الحدث</label>
                <input
                  required
                  type="text"
                  className="form-control"
                  id="title"
                  placeholder="أدخل عنوان الحدث"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="description">وصف الحدث</label>
                <textarea
                  required
                  className="form-control"
                  id="description"
                  placeholder="أدخل وصف الحدث"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="location">الموقع</label>
                <input
                  required
                  type="text"
                  className="form-control"
                  id="location"
                  placeholder="أدخل موقع الحدث"
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="date">تاريخ الحدث</label>
                <input
                  required
                  type="datetime-local"
                  className="form-control"
                  id="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="priority">الأولوية</label>
                <select
                  required
                  className="form-control"
                  id="priority"
                  onChange={(e) => setPriority(e.target.value)}
                  value={priority}
                >
                  <option value="1">عاجل جدا</option>
                  <option value="2"> عاجل</option>
                  <option value="3"> عادي</option>
                </select>
              </div>

              {loading && (
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              )}

              {message && (
                <div className="alert alert-success" role="alert">
                  {message}
                </div>
              )}

              {error && (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              )}
             <br></br>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={loading}
              >
                إضافة حدث
              </button>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              setUpdateFeed(!updateFeed);
              resetModel();
              setShow(false);
            }}
          >
            إغلاق
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EventModel;
