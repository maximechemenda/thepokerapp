// General
import React from "react"
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import uuid from 'react-uuid';
import toast from 'react-hot-toast';
import { useRouter } from "next/router"

// Firestore
import { db } from "../firebase/firebaseApp"
import { setDoc, doc } from "firebase/firestore"

// Components
import { ActionButton, FormBase, FormInput, WebsiteShell } from "../components"

// Utils
import { EventType } from "../utils"

export default function Home() {
    const router = useRouter();
    const initialEvent: EventType = {
        uid: uuid(),
        title: undefined,
        date: undefined,
        time: undefined,
        location: undefined,
        current_players: undefined,
        total_players: undefined,
        buyin: undefined,
        description: undefined,
        firstPrize: undefined,
        secondPrize: undefined,
        interestedUsers: []
    }

    const validationSchema = Yup.object().shape({
        title: Yup.string()
          .required('Title is required'),
        date: Yup.string()
          .required('Date is required'),
        time: Yup.string()
          .required('Time is required'),
        location: Yup.string()
          .required('Location is required'),
        current_players: Yup.number()
            .typeError("Please input a number")
            .min(1, "There must be at least 1 player registered")
            .required('This field is required'),
        total_players: Yup.number()
            .typeError("Please input a number")
            .min(2, "There must be at least 2 players allowed")
            .required('This field is required'),
        buyin: Yup.number()
            .typeError("Please input a number")
            .required('This field is required'),
        description: Yup.string()
            .required("A description is required"),
        firstPrize: Yup.number()
            .typeError("Please input a number")
            .min(1, 'First prize must be at least £1')
            .required('This field is required'),
        secondPrize: Yup.number()
            .typeError("Please input a number")
            .min(1, 'Second prize must be at least £1')
            .required('This field is required'),
      });

    

    const addProjectToFirebase = async (event: EventType) => {
        const docRef = doc(db, "events", event.uid);

        setDoc(docRef, event)
        .then(docRef => {
            toast.success("Event successfully added my friend")
            router.push("/")
        })
        .catch(error => {
            toast.error("Error when adding the event")
            console.log(error);
        })
    }

  return (
     <WebsiteShell
     head_title="Create a poker event"
     head_description="Create an event and let players join you!"
     page_title = "find people to join your poker event"
     >
         {/* TODO(MC): Clean this code */}
        <div className="col-span-5">
            <div className="grid grid-cols-7">
            <div className="col-span-7 md:col-span-7 lg:col-span-5 xl:col-span-3">
                <FormBase>
                    <Formik
                        initialValues={initialEvent}
                        validationSchema={validationSchema}
                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {
                                const event:EventType = values;
                                addProjectToFirebase(event)
                            }, 400);
                          }}
                        >
                        {({ errors, touched }) => (
                            <Form>
                                <div className="grid grid-cols-1 gap-6">
                                    <Field
                                        name="title"
                                        type="text"
                                        placeholder="Chill poker with friends"
                                        component={FormInput}
                                        error={errors.title}
                                        touched={touched.title}
                                        title="Event title"
                                    />

                                    <Field
                                            name="location"
                                            type="text"
                                            placeholder="Newington"
                                            component={FormInput}
                                            error={errors.location}
                                            touched={touched.location}
                                            title="Location"
                                        />
                                    

                                    <div className="grid md:grid-cols-2 gap-5">
                                        <Field
                                            name="date"
                                            component={FormInput}
                                            placeholder="Dec 12th"
                                            type="text"
                                            error={errors.date}
                                            touched={touched.date}
                                            title="Date"
                                        />
                                        
                                        <Field
                                            name="time"
                                            component={FormInput}
                                            placeholder="10pm"
                                            type="text"
                                            error={errors.time}
                                            touched={touched.time}
                                            title="Time"
                                        />
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-5">
                                        <Field
                                            name="current_players"
                                            type="number"
                                            placeholder="3"
                                            component={FormInput}
                                            error={errors.current_players}
                                            touched={touched.current_players}
                                            title="Current no. of players"
                                        />
                                        <Field
                                            name="total_players"
                                            component={FormInput}
                                            placeholder="6"
                                            type="number"
                                            error={errors.total_players}
                                            touched={touched.total_players}
                                            title="Max. no. of players"
                                        />
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-5">
                                        <Field
                                            name="buyin"
                                            type="number"
                                            placeholder="10"
                                            component={FormInput}
                                            error={errors.buyin}
                                            touched={touched.buyin}
                                            title="Buy in (in £)"
                                        />
                                        <Field
                                            name="firstPrize"
                                            component={FormInput}
                                            placeholder="30"
                                            type="number"
                                            error={errors.firstPrize}
                                            touched={touched.firstPrize}
                                            title="First prize (in £)"
                                        />
                                    </div>

                                    <Field
                                            name="secondPrize"
                                            component={FormInput}
                                            placeholder="5"
                                            type="number"
                                            error={errors.secondPrize}
                                            touched={touched.secondPrize}
                                            title="Second prize (in £)"
                                        />

                                        <Field
                                            name="description"
                                            component={FormInput}
                                            placeholder="We are a chill group of people ready to steal your money."
                                            type="text"
                                            error={errors.description}
                                            touched={touched.description}
                                            title="Description"
                                        />
                                </div>

                                <div className="flex justify-center mt-10">
                                    <ActionButton type="submit" variant="primary">
                                        Create project
                                    </ActionButton>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </FormBase>
            </div>
            </div>
            </div>

     </WebsiteShell>
  )
}
