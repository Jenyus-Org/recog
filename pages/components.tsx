import { Button } from "@ui/Button";
import {
  Card,
  CardBody,
  CardContent,
  CardFooter,
  CardHeader,
  CardSidebar,
} from "@ui/Card";
import { Dropdown } from "@ui/Dropdown";
import { Form, FormInput } from "@ui/Form";
import {
  HiOutlineArrowCircleDown,
  HiOutlineArrowCircleUp,
} from "react-icons/hi";
import { LoremIpsum } from "react-lorem-ipsum";

export default function Components() {
  return (
    <div className="p-4">
      <h1 className="text-3xl text-center">Components</h1>
      <p className="text-xl text-gray-300 text-center">
        Collection of Components
      </p>
      <br />
      <h2 className="text-2xl">Buttons</h2>
      <div className="flex flex-wrap mt-4">
        <Button variant="transparent" className="mr-2">
          Share
        </Button>
        <Button className="mr-2">Share</Button>
        <Button variant="primary" className="mr-2">
          Share
        </Button>
        <Button variant="secondary" className="mr-2">
          Share
        </Button>
        <Button variant="gray" className="mr-2">
          Share
        </Button>
        <Button variant="light-gray">Share</Button>
      </div>
      <div className="flex flex-wrap mt-4">
        <Button pill variant="transparent" className="mr-2">
          Share
        </Button>
        <Button pill className="mr-2">
          Share
        </Button>
        <Button pill variant="primary" className="mr-2">
          Share
        </Button>
        <Button pill variant="secondary" className="mr-2">
          Share
        </Button>
        <Button pill variant="gray" className="mr-2">
          Share
        </Button>
        <Button pill variant="light-gray">
          Share
        </Button>
      </div>
      <div className="flex flex-wrap mt-4">
        <Button pill outline variant="transparent" className="mr-2">
          Share
        </Button>
        <Button pill outline className="mr-2">
          Share
        </Button>
        <Button pill outline variant="primary" className="mr-2">
          Share
        </Button>
        <Button pill outline variant="secondary" className="mr-2">
          Share
        </Button>
        <Button pill outline variant="gray" className="mr-2">
          Share
        </Button>
        <Button pill outline variant="light-gray">
          Share
        </Button>
      </div>
      <br />
      <h2 className="text-2xl">Cards</h2>
      <br />
      <div className="grid grid-cols-2 gap-4">
        <Card elevated>
          <CardBody>
            <CardHeader>Card with Footer</CardHeader>
            <CardContent>
              <LoremIpsum p={2} />
              <Button pill className="mt-2">
                Share
              </Button>
            </CardContent>
          </CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>
        <Card>
          <CardSidebar className="flex flex-col justify-center items-center py-4">
            <HiOutlineArrowCircleUp size="32" />
            <br />
            <span className="text-3xl">5</span>
            <br />
            <HiOutlineArrowCircleDown size="32" />
          </CardSidebar>
          <CardBody>
            <CardHeader>Card with Footer and Sidebar</CardHeader>
            <CardContent>
              <LoremIpsum p={2} />
              <Button pill className="mt-2 mr-2">
                Share
              </Button>
            </CardContent>
          </CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>
      </div>
      <br />
      <h2 className="text-2xl">Dropdowns</h2>
      <br />
      <div className="flex flex-wrap">
        <Dropdown className="mr-2" />
        <Dropdown pill variant="transparent" className="mr-2" />
        <Dropdown pill className="mr-2" />
        <Dropdown pill variant="primary" className="mr-2" />
        <Dropdown pill variant="secondary" className="mr-2" />
        <Dropdown pill variant="gray" className="mr-2" />
        <Dropdown pill variant="light-gray" />
      </div>
      <br />
      <h2 className="text-2xl">Forms</h2>
      <br />
      <Card>
        <CardBody>
          <CardHeader>Form with inputs</CardHeader>
          <CardContent>
            <Form prevent>
              <div className="flex flex-wrap mt-4">
                <FormInput placeholder="Placeholder..." className="mr-2" />
                <FormInput
                  placeholder="Placeholder..."
                  className="mr-2"
                  variant="primary"
                />
                <FormInput
                  placeholder="Placeholder..."
                  className="mr-2"
                  variant="secondary"
                />
                <FormInput
                  placeholder="Placeholder..."
                  className="mr-2"
                  variant="gray"
                />
                <FormInput placeholder="Placeholder..." variant="light-gray" />
              </div>
              <div className="flex flex-wrap mt-8">
                <FormInput
                  placeholder="Placeholder..."
                  className="mr-2"
                  fill="primary"
                />
                <FormInput
                  placeholder="Placeholder..."
                  className="mr-2"
                  fill="primary"
                  pill
                />
                <FormInput
                  placeholder="Placeholder..."
                  className="mr-2"
                  fill="secondary"
                  pill
                />
                <FormInput
                  placeholder="Placeholder..."
                  className="mr-2"
                  fill="gray"
                  pill
                />
                <FormInput
                  placeholder="Placeholder..."
                  fill="light-gray"
                  pill
                />
              </div>
            </Form>
          </CardContent>
        </CardBody>
      </Card>
    </div>
  );
}
