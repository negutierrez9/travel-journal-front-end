import { format } from 'date-fns'; 
import { useState } from "react";
import { Link } from 'react-router-dom';
import {
    Form,
    Input,
    Button,
    Space,
    DatePicker
  } from "antd";
import { addEntry } from "../api_services/EntryService";

  const layout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 16 }
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 }
  };
  
export default function Demo() {
  const [newTitle, setNewTitle] = useState(''); 
  const [newLocation, setNewLocation] = useState(''); 
  const [newStartDate, setNewStartDate] = useState(''); 
  const [newEndDate, setNewEndDate] = useState(''); 
  const [newDescription, setNewDescription] = useState('');
  const [newGoogleMapsUrl, setNewGoogleMapsUrl] = useState(''); 
  const [newImgUrl, setNewImgUrl] = useState(''); 

  const handleAddEntry = () => {
    addEntry({
      newTitle,
      newLocation,
      newStartDate,
      newEndDate,
      newDescription,
      newGoogleMapsUrl,
      newImgUrl
    })
  };

  const [form] = Form.useForm();

  const onReset = () => {
    form.resetFields();
  };

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      {...layout}
      form={form}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item name="form-title" label="Title" rules={[{ required: true, message: "Title is required" }]}>
        <Input 
          onChange={(event) => {setNewTitle(event.target.value)}}/>
      </Form.Item>

      <Form.Item
        name="Location"
        label="Location"
        rules={[{ required: true, message: "Location is required" }]}
      >
        <Input 
          onChange={(event) => {setNewLocation(event.target.value)}}
          style={{ width: 200 }} />
      </Form.Item>

      <Form.Item 
          name="startDate"
          label="Start Date"
          rules={[{ required: true, message: "Start Date is required" }]}
      >
        <DatePicker
          onChange={(event) => {setNewStartDate(format(event.$d, 'yyyy-MM-dd'))}} />
        
      </Form.Item>

      <Form.Item 
          name="endDate"
          label="End Date"
      >
        <DatePicker 
          onChange={(event) => {setNewEndDate(format(event.$d, 'yyyy-MM-dd'))}}
          />
      </Form.Item>

      <Form.Item name="description" label="Description">
        <Input 
          onChange={(event) => {setNewDescription(event.target.value)}}
          placeholder="What did you do here?" 
          style={{ height: 100}}/>
      </Form.Item>

      <Form.Item name="googleMapsUrl" label="Google Maps Link">
        <Input 
          onChange={(event) => {setNewGoogleMapsUrl(event.target.value)}} />
      </Form.Item>

      <Form.Item name="imgUrl" label="Image Link">
        <Input 
          onChange={(event) => {setNewImgUrl(event.target.value)}} />
      </Form.Item>

      <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit" onClick={handleAddEntry}>
          <Link to='/home'>Submit</Link>
          </Button>
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button htmlType="button" onClick={onReset}>
          Reset
        </Button>
      </Form.Item>
    </Form>
  );
}