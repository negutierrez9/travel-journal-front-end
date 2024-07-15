import {
    Form,
    Input,
    Button,
    Checkbox,
    Space,
    DatePicker
  } from "antd";

  const layout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 16 }
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 }
  };
  
  export default function Demo() {
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
  
    const onValuesChange = (values) => {
      console.log("onValuesChange:", values);
    };
  
    return (
      <Form
        {...layout}
        form={form}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        onValuesChange={onValuesChange}
      >
        <Form.Item name="form-title" label="Title" rules={[{ required: true, message: "Title is required" }]}>
          <Input />
        </Form.Item>

        <Form.Item
          name="Location"
          label="Location"
          rules={[{ required: true, message: "Location is required" }]}
        >
          <Input style={{ width: 200 }} />
        </Form.Item>

        <Form.Item 
            name="startDate"
            label="Start Date"
            rules={[{ required: true, message: "Start Date is required" }]}
        >
          <DatePicker />
        </Form.Item>

        <Form.Item 
            name="endDate"
            label="End Date"
        >
          <DatePicker />
        </Form.Item>

        <Form.Item name="description" label="Description">
          <Input placeholder="What did you do here?"/>
        </Form.Item>
  
        <Form.Item name="googleMapsUrl" label="Google Maps Link">
          <Input />
        </Form.Item>

        <Form.Item name="imgUrl" label="Image Link">
          <Input />
        </Form.Item>
  
        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
  
        <Form.Item {...tailLayout}>
          <Space>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button htmlType="button" onClick={onReset}>
              Reset
            </Button>
          </Space>
        </Form.Item>
      </Form>
    );
  }