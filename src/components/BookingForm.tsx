import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
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
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    email: "",
    phone: "",
    businessType: "",
    businessSize: "",
    challenge: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
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
    setIsSubmitting(false);
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Name *</Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
            required
            className="bg-background border-border"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="businessName">Business Name *</Label>
          <Input
            id="businessName"
            value={formData.businessName}
            onChange={(e) => handleChange("businessName", e.target.value)}
            required
            className="bg-background border-border"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            required
            className="bg-background border-border"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            className="bg-background border-border"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="businessType">Business Type *</Label>
          <Select
            value={formData.businessType}
            onValueChange={(value) => handleChange("businessType", value)}
            required
          >
            <SelectTrigger className="bg-background border-border">
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="trade">Trade & Service Business</SelectItem>
              <SelectItem value="warehouse">Warehouse & Physical Operations</SelectItem>
              <SelectItem value="both">Both</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="businessSize">Business Size *</Label>
          <Select
            value={formData.businessSize}
            onValueChange={(value) => handleChange("businessSize", value)}
            required
          >
            <SelectTrigger className="bg-background border-border">
              <SelectValue placeholder="Select size" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1-5">1-5 employees</SelectItem>
              <SelectItem value="6-15">6-15 employees</SelectItem>
              <SelectItem value="16-30">16-30 employees</SelectItem>
              <SelectItem value="31-50">31-50 employees</SelectItem>
              <SelectItem value="50+">50+ employees</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="challenge">Main Challenge *</Label>
        <Textarea
          id="challenge"
          value={formData.challenge}
          onChange={(e) => handleChange("challenge", e.target.value)}
          placeholder="What's the biggest operational challenge your business faces right now?"
          required
          rows={4}
          className="bg-background border-border resize-none"
        />
      </div>

      <Button type="submit" disabled={isSubmitting} className="w-full md:w-auto">
        {isSubmitting ? "Submitting..." : "Request walk-through"}
      </Button>
    </form>
  );
};

export default BookingForm;
