import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

interface DemoModalProps {
  trigger: React.ReactNode;
  type: 'demo' | 'trial';
}

export function DemoModal({ trigger, type }: DemoModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: type === 'demo' ? "Demo Request Sent!" : "Trial Started!",
      description: type === 'demo' 
        ? "We'll contact you within 24 hours to schedule your demo."
        : "Check your email for setup instructions.",
    });
    
    setIsSubmitting(false);
    setIsOpen(false);
  };

  const title = type === 'demo' ? 'Book a Demo' : 'Start Free Trial';
  const description = type === 'demo' 
    ? 'Schedule a personalized demo of GURIPAY'
    : 'Get started with GURIPAY today';

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary">{title}</DialogTitle>
          <p className="text-muted-foreground">{description}</p>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input id="firstName" name="firstName" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" name="lastName" required />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" name="email" type="email" required />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" name="phone" type="tel" required />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="propertyType">Property Type</Label>
            <Select name="propertyType" required>
              <SelectTrigger>
                <SelectValue placeholder="Select property type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="apartment">Apartment Complex</SelectItem>
                <SelectItem value="residential">Residential Plots</SelectItem>
                <SelectItem value="commercial">Commercial Properties</SelectItem>
                <SelectItem value="mixed">Mixed Use</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="units">Number of Units</Label>
            <Select name="units" required>
              <SelectTrigger>
                <SelectValue placeholder="Select number of units" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1-10">1-10 units</SelectItem>
                <SelectItem value="11-50">11-50 units</SelectItem>
                <SelectItem value="51-100">51-100 units</SelectItem>
                <SelectItem value="100+">100+ units</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          {type === 'demo' && (
            <div className="space-y-2">
              <Label htmlFor="message">Additional Information</Label>
              <Textarea 
                id="message" 
                name="message" 
                placeholder="Tell us about your property management needs..."
                className="resize-none"
                rows={3}
              />
            </div>
          )}
          
          <div className="flex gap-3 pt-4">
            <Button 
              type="button" 
              variant="outline" 
              className="flex-1"
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </Button>
            <Button 
              type="submit" 
              variant={type === 'demo' ? 'hero' : 'cta'}
              className="flex-1"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : (type === 'demo' ? 'Book Demo' : 'Start Trial')}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}