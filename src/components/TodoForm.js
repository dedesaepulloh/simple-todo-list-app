import React, {useState, useEffect, useRef} from 'react';
import { Button, Form, FormGroup, Input, Col} from 'reactstrap';

const TodoForm = (props) => {

    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = e => {
        setInput(e.target.value)
    };

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });
    };

    return (
        <>
            <Form onSubmit={handleSubmit} className="frm">
            {props.edit ? (
                <div className="my-5">
                    <FormGroup>
                        <Col>
                            <Input type="text" name="text" value={input} placeholder="Update your item" onChange={handleChange} ref={inputRef} bsSize="lg"  />
                        </Col>
                        
                    </FormGroup>
                    <Button className="float-right" color="success" size="lg" >Update</Button>
                </div>
            ) : (
                <div className="my-5">
                        <FormGroup>
                            <Col>
                                <Input type="text" name="text" value={input} placeholder="Add a todo" onChange={handleChange} ref={inputRef} bsSize="lg"  />
                            </Col>
                            
                        </FormGroup>
                     <Button className="float-right" color="danger" size="lg" >Add todo</Button>
                </div>
            )
            }
        </Form>
        </>
        
    )
}

export default TodoForm
