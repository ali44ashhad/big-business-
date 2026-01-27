import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import emailjs from "@emailjs/browser";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const BookingForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    email: "",
    phone: "",
    businessType: "",
    businessSize: "",
    challenge: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const serviceId = import.meta.env.VITE_EMAIL_SERVICE;
      const templateId = import.meta.env.VITE_EMAIL_TEMPLATE;
      const publicKey = import.meta.env.VITE_EMAIL_PUBLIC;

      if (!serviceId || !templateId || !publicKey) {
        toast.error("Email service is not configured.");
        setIsSubmitting(false);
        console.log("SERVICE:", serviceId);
        console.log("TEMPLATE:", templateId);
        console.log("PUBLIC:", publicKey);

        return;
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          businessName: formData.businessName,
          email: formData.email,
          phone: formData.phone,
          businessType: formData.businessType,
          businessSize: formData.businessSize,
          challenge: formData.challenge,
        },
        publicKey,
      );

      toast.success("Thank you. We'll be in touch shortly.");

      setFormData({
        name: "",
        businessName: "",
        email: "",
        phone: "",
        businessType: "",
        businessSize: "",
        challenge: "",
      });
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label>Name *</Label>
          <Input value={formData.name} onChange={(e) => handleChange("name", e.target.value)} required />
        </div>

        <div>
          <Label>Business Name *</Label>
          <Input value={formData.businessName} onChange={(e) => handleChange("businessName", e.target.value)} required />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label>Email *</Label>
          <Input type="email" value={formData.email} onChange={(e) => handleChange("email", e.target.value)} required />
        </div>

        <div>
          <Label>Phone</Label>
          <Input value={formData.phone} onChange={(e) => handleChange("phone", e.target.value)} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label>Business Type *</Label>
          <Select onValueChange={(v) => handleChange("businessType", v)}>
            <SelectTrigger><SelectValue placeholder="Select type" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="trade">Trade</SelectItem>
              <SelectItem value="warehouse">Warehouse</SelectItem>
              <SelectItem value="both">Both</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label>Business Size *</Label>
          <Select onValueChange={(v) => handleChange("businessSize", v)}>
            <SelectTrigger><SelectValue placeholder="Select size" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="1-5">1-5</SelectItem>
              <SelectItem value="6-15">6-15</SelectItem>
              <SelectItem value="16-30">16-30</SelectItem>
              <SelectItem value="31-50">31-50</SelectItem>
              <SelectItem value="50+">50+</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div>
        <Label>Challenge *</Label>
        <Textarea value={formData.challenge} onChange={(e) => handleChange("challenge", e.target.value)} required />
      </div>

      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? "Sending..." : "Submit"}
      </Button>

    </form>
  );
};

export default BookingForm;
