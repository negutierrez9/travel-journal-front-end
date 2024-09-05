import { format } from 'date-fns'; 
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import {
    Form,
    Input,
    Button,
    DatePicker
  } from "antd";
import { addEntry, editEntry } from "../api_services/EntryService";

  const layout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 16 }
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 }
  };
  
export default function Demo(props) {
  const entryId = props.id
  const [editEntryStatus, setEditEntryStatus] = useState(true)

  const [newTitle, setNewTitle] = editEntryStatus ? useState(props.currentTitle) : useState(''); 
  const [newLocation, setNewLocation] = editEntryStatus ? useState(props.currentLocation) : useState(''); 
  const [newStartDate, setNewStartDate] = editEntryStatus ? useState(props.currentStartDate) : useState(''); 
  const [newEndDate, setNewEndDate] = editEntryStatus ? useState(props.currentEndDate) : useState(''); 
  const [newDescription, setNewDescription] = editEntryStatus ? useState(props.currentDescription) : useState('');
  const [newGoogleMapsUrl, setNewGoogleMapsUrl] = editEntryStatus ? useState(props.currentGoogleMapsUrl) : useState(''); 
  const [newImgUrl, setNewImgUrl] = editEntryStatus ? useState(props.currentImgUrl) : useState(''); 

  const navigate = useNavigate(); 

  const handleAddEntry = () => {
    addEntry({
      newTitle,
      newLocation,
      newStartDate,
      newEndDate,
      newDescription,
      newGoogleMapsUrl,
      newImgUrl
    }); 

    navigate('/home'); 
  };

  const handleEditEntry = () => {
    editEntry(entryId, {
      newTitle,
      newLocation,
      newStartDate,
      newEndDate,
      newDescription,
      newGoogleMapsUrl,
      newImgUrl
    }); 

    navigate('/home'); 
  }

  const [form] = Form.useForm();

  const onReset = () => {
    form.resetFields();
  };

  const onFinish = (values) => {
    editEntryStatus ? handleEditEntry(values) : handleAddEntry(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      {...layout}
      form={form}
      initialValues={
        editEntryStatus ? {
          "title": props.currentTitle,
          "location": props.currentLocation,
          "description": props.currentDescription,
          "googleMapsUrl": props.currentGoogleMapsUrl,
          "imgUrl": props.currentImgUrl
        } : {}
      }
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item name="title" label="Title" rules={[{ required: true, message: "Title is required" }]}>
        <Input 
          onChange={(event) => {setNewTitle(event.target.value)}}/>
      </Form.Item>

      <Form.Item
        name="location"
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
          onChange={(event) => {
            setNewStartDate(format(event.$d, 'yyyy-MM-dd'))
            }} />
        
      </Form.Item>

      <Form.Item 
          name="endDate"
          label="End Date"
          rules={[{ required: true, message: "End Date is required" }]}
      >
        <DatePicker 
          onChange={(event) => {
            setNewEndDate(format(event.$d, 'yyyy-MM-dd')
            )}} />
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
          <Button type="primary" htmlType="submit">
          Save
          </Button>
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button htmlType="button" onClick={onReset}>
          Reset
        </Button>
        <Button htmlType="button">
        <Link to='/home'>Cancel</Link>
        </Button>
      </Form.Item>
    </Form>
  );
}